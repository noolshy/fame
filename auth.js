// auth.js - Скрипт для авторизации и регистрации

const API_URL = 'http://localhost:3000/api';

// Проверка сложности пароля
function checkPasswordStrength(password) {
    let strength = 0;
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    Object.values(requirements).forEach(req => {
        if (req) strength++;
    });
    
    return { strength, requirements };
}

// Обновление индикатора сложности пароля
function updatePasswordStrength(password) {
    const strengthElement = document.getElementById('password-strength');
    if (!strengthElement) return;
    
    const { strength, requirements } = checkPasswordStrength(password);
    let text = '';
    let className = '';
    
    if (strength < 2) {
        text = 'Слабый пароль';
        className = 'strength-weak';
    } else if (strength < 4) {
        text = 'Средний пароль';
        className = 'strength-medium';
    } else {
        text = 'Сильный пароль';
        className = 'strength-strong';
    }
    
    strengthElement.textContent = text;
    strengthElement.className = `password-strength ${className}`;
    
    // Обновляем список требований
    Object.keys(requirements).forEach(key => {
        const element = document.getElementById(`req-${key}`);
        if (element) {
            element.className = requirements[key] ? 'requirement-met' : 'requirement-not-met';
        }
    });
}

// Проверка совпадения паролей
function checkPasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}

// Отображение сообщения об ошибке
function showError(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 5000);
    }
}

// Отображение сообщения об успехе
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

// Регистрация пользователя
async function registerUser(username, email, password) {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showSuccess('Регистрация успешна! Теперь вы можете войти.');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            showError(data.message || 'Ошибка регистрации');
        }
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        showError('Ошибка соединения с сервером');
    }
}

// Вход пользователя
async function loginUser(username, password, rememberMe) {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Сохраняем токен
            localStorage.setItem('token', data.token);
            
            if (rememberMe) {
                // Сохраняем для долгой сессии
                localStorage.setItem('rememberMe', 'true');
            }
            
            showSuccess('Вход выполнен успешно!');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            showError(data.message || 'Ошибка входа');
        }
    } catch (error) {
        console.error('Ошибка входа:', error);
        showError('Ошибка соединения с сервером');
    }
}

// Проверка токена (для страниц требующих авторизации)
async function verifyToken() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
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
            localStorage.removeItem('token');
            window.location.href = 'login.html';
            return null;
        }
    } catch (error) {
        console.error('Ошибка проверки токена:', error);
        window.location.href = 'login.html';
        return null;
    }
}

// Проверка прав администратора
async function checkAdminAccess() {
    const userData = await verifyToken();
    if (!userData || userData.role !== 'admin') {
        window.location.href = 'index.html';
        return null;
    }
    return userData;
}

// Инициализация обработчиков на странице регистрации
function initRegisterPage() {
    const registerForm = document.getElementById('register-form');
    const passwordInput = document.getElementById('password');
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            updatePasswordStrength(this.value);
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const agreeTerms = document.getElementById('agree-terms').checked;
            
            // Валидация
            if (!username || !email || !password || !confirmPassword) {
                showError('Все поля обязательны для заполнения');
                return;
            }
            
            if (!agreeTerms) {
                showError('Необходимо согласиться с правилами использования');
                return;
            }
            
            if (!checkPasswordMatch(password, confirmPassword)) {
                showError('Пароли не совпадают');
                return;
            }
            
            const { strength } = checkPasswordStrength(password);
            if (strength < 2) {
                showError('Пароль слишком слабый');
                return;
            }
            
            // Регистрация
            await registerUser(username, email, password);
        });
    }
}

// Инициализация обработчиков на странице входа
function initLoginPage() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('remember-me').checked;
            
            if (!username || !password) {
                showError('Все поля обязательны для заполнения');
                return;
            }
            
            await loginUser(username, password, rememberMe);
        });
    }
}

// Автоматическая инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем на какой странице мы находимся
    if (window.location.pathname.includes('register.html')) {
        initRegisterPage();
    } else if (window.location.pathname.includes('login.html')) {
        initLoginPage();
    } else if (window.location.pathname.includes('admin.html')) {
        // Проверяем доступ к админке
        checkAdminAccess();
    }
    
    // Проверяем авторизацию на всех страницах
    const token = localStorage.getItem('token');
    if (token) {
        // Обновляем интерфейс для авторизованных пользователей
        updateUIForAuth();
    }
});

// Функция обновления интерфейса для авторизации (должна быть доступна глобально)
async function updateUIForAuth() {
    try {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        const response = await fetch(`${API_URL}/auth/verify`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const userData = await response.json();
            
            // Скрываем/показываем элементы в зависимости от авторизации
            const authLinks = document.querySelectorAll('.auth-link');
            const userLinks = document.querySelectorAll('.user-link');
            const adminLink = document.getElementById('admin-link');
            
            authLinks.forEach(link => link.style.display = 'none');
            userLinks.forEach(link => link.style.display = 'block');
            
            if (userData.role === 'admin' && adminLink) {
                adminLink.style.display = 'block';
            }
        }
    } catch (error) {
        console.error('Ошибка обновления интерфейса:', error);
    }
}

// Функция выхода
async function logout() {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            await fetch(`${API_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        }
    } catch (error) {
        console.error('Ошибка при выходе:', error);
    } finally {
        localStorage.removeItem('token');
        localStorage.removeItem('rememberMe');
        window.location.href = 'index.html';
    }
}

// Экспортируем функции для использования в других файлах
window.auth = {
    checkPasswordStrength,
    registerUser,
    loginUser,
    verifyToken,
    checkAdminAccess,
    updateUIForAuth,
    logout
};