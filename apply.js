// apply.js - Скрипт для подачи заявки

const API_URL = 'http://localhost:3000/api';

// Проверка авторизации перед подачей заявки
async function checkAuthForApply() {
    const token = localStorage.getItem('token');
    if (!token) {
        // Перенаправляем на страницу входа
        window.location.href = 'login.html?redirect=apply.html';
        return null;
    }
    
    try {
        const response = await fetch(`${API_URL}/auth/verify`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            return await response.json();
        } else {
            window.location.href = 'login.html?redirect=apply.html';
            return null;
        }
    } catch (error) {
        console.error('Ошибка проверки авторизации:', error);
        window.location.href = 'login.html?redirect=apply.html';
        return null;
    }
}

// Загрузка изображения
function handleImageUpload(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    
    if (!input || !preview) return;
    
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        // Проверка типа файла
        if (!file.type.match('image.*')) {
            showError('Пожалуйста, выберите файл изображения');
            return;
        }
        
        // Проверка размера файла (максимум 5MB)
        if (file.size > 5 * 1024 * 1024) {
            showError('Размер файла не должен превышать 5MB');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Предпросмотр">`;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    });
}

// Drag and drop для загрузки файлов
function setupDragAndDrop(dropZoneId, inputId) {
    const dropZone = document.getElementById(dropZoneId);
    const input = document.getElementById(inputId);
    
    if (!dropZone || !input) return;
    
    // Предотвращаем стандартное поведение браузера
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    // Подсветка при наведении
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });
    
    function highlight() {
        dropZone.style.borderColor = '#666';
        dropZone.style.background = 'rgba(255, 255, 255, 0.1)';
    }
    
    function unhighlight() {
        dropZone.style.borderColor = '#444';
        dropZone.style.background = '';
    }
    
    // Обработка drop
    dropZone.addEventListener('drop', handleDrop, false);
    
    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        
        if (files.length > 0) {
            input.files = files;
            // Запускаем событие change вручную
            input.dispatchEvent(new Event('change'));
        }
    }
}

// Отправка заявки
async function submitApplication(formData) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/applications`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showSuccess('Заявка успешно отправлена!');
            // Очищаем форму
            document.getElementById('apply-form').reset();
            document.getElementById('avatar-preview').style.display = 'none';
            
            // Перенаправляем на страницу отслеживания
            setTimeout(() => {
                window.location.href = 'my-applications.html';
            }, 2000);
        } else {
            showError(data.message || 'Ошибка отправки заявки');
        }
    } catch (error) {
        console.error('Ошибка отправки заявки:', error);
        showError('Ошибка соединения с сервером');
    }
}

// Валидация формы
function validateApplicationForm(formData) {
    const errors = [];
    
    // Проверка обязательных полей
    if (!formData.get('nickname')) {
        errors.push('Никнейм обязателен для заполнения');
    }
    
    if (!formData.get('telegram')) {
        errors.push('Telegram username обязателен');
    }
    
    if (!formData.get('category')) {
        errors.push('Выберите категорию');
    }
    
    if (!formData.get('description')) {
        errors.push('Описание обязательно');
    }
    
    // Проверка длины описания
    const description = formData.get('description');
    if (description && description.length > 200) {
        errors.push('Описание не должно превышать 200 символов');
    }
    
    return errors;
}

// Инициализация страницы подачи заявки
function initApplyPage() {
    // Проверяем авторизацию
    checkAuthForApply().then(userData => {
        if (userData) {
            // Обновляем интерфейс для авторизованного пользователя
            const loginLink = document.getElementById('login-link');
            if (loginLink) {
                loginLink.style.display = 'none';
            }
        }
    });
    
    // Настройка загрузки изображений
    handleImageUpload('avatar', 'avatar-preview');
    setupDragAndDrop('avatar-upload', 'avatar');
    
    // Обработка отправки формы
    const applyForm = document.getElementById('apply-form');
    if (applyForm) {
        applyForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Отключаем кнопку отправки
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
            
            // Собираем данные формы
            const formData = new FormData(this);
            
            // Валидация
            const errors = validateApplicationForm(formData);
            if (errors.length > 0) {
                showError(errors.join('<br>'));
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Отправить заявку';
                return;
            }
            
            // Добавляем дату подачи
            formData.append('submittedAt', new Date().toISOString());
            
            // Отправляем заявку
            await submitApplication(formData);
            
            // Включаем кнопку обратно
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Отправить заявку';
        });
    }
    
    // Подсчет символов в текстовых полях
    const descriptionInput = document.getElementById('description');
    const detailsInput = document.getElementById('details');
    
    if (descriptionInput) {
        descriptionInput.addEventListener('input', function() {
            const length = this.value.length;
            const maxLength = 200;
            const counter = this.nextElementSibling;
            
            if (counter && counter.tagName === 'SMALL') {
                counter.textContent = `${length}/${maxLength} символов`;
                
                if (length > maxLength) {
                    counter.style.color = '#ff4444';
                } else {
                    counter.style.color = '#888';
                }
            }
        });
    }
    
    if (detailsInput) {
        detailsInput.addEventListener('input', function() {
            const length = this.value.length;
            const maxLength = 1000;
            const counter = this.nextElementSibling;
            
            if (counter && counter.tagName === 'SMALL') {
                counter.textContent = `${length}/${maxLength} символов`;
                
                if (length > maxLength) {
                    counter.style.color = '#ff4444';
                } else {
                    counter.style.color = '#888';
                }
            }
        });
    }
}

// Отображение ошибок
function showError(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 5000);
    }
}

// Отображение успешных сообщений
function showSuccess(message) {
    const successElement = document.getElementById('success-message');
    if (successElement) {
        successElement.textContent = message;
        successElement.style.display = 'block';
        setTimeout(() => {
            successElement.style.display = 'none';
        }, 5000);
    }
}

// Автоматическая инициализация
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('apply.html')) {
        initApplyPage();
    }
});

// Экспорт функций для использования в других файлах
window.apply = {
    checkAuthForApply,
    submitApplication,
    validateApplicationForm
};