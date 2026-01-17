// admin.js - Скрипт для админ-панели

const API_URL = 'http://localhost:3000/api';
let currentUser = null;

// Проверка прав администратора
async function verifyAdminAccess() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = 'login.html';
            return null;
        }
        
        const response = await fetch(`${API_URL}/auth/verify`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const userData = await response.json();
            if (userData.role !== 'admin') {
                window.location.href = 'index.html';
                return null;
            }
            currentUser = userData;
            return userData;
        } else {
            window.location.href = 'login.html';
            return null;
        }
    } catch (error) {
        console.error('Ошибка проверки прав:', error);
        window.location.href = 'login.html';
        return null;
    }
}

// Загрузка статистики
async function loadStats() {
    try {
        const response = await fetch(`${API_URL}/admin/stats`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (response.ok) {
            const stats = await response.json();
            updateStatsUI(stats);
        }
    } catch (error) {
        console.error('Ошибка загрузки статистики:', error);
    }
}

// Обновление интерфейса статистики
function updateStatsUI(stats) {
    const elements = {
        'total-members': stats.totalMembers,
        'pending-apps': stats.pendingApplications,
        'today-apps': stats.todayApplications,
        'total-users': stats.totalUsers
    };
    
    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
}

// Загрузка заявок на рассмотрении
async function loadPendingApplications() {
    try {
        const response = await fetch(`${API_URL}/admin/applications/pending`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (response.ok) {
            const applications = await response.json();
            renderPendingApplications(applications);
        }
    } catch (error) {
        console.error('Ошибка загрузки заявок:', error);
    }
}

// Отображение заявок на рассмотрении
function renderPendingApplications(applications) {
    const tbody = document.getElementById('pending-body');
    if (!tbody) return;
    
    if (applications.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 30px; color: #888;">
                    Нет заявок на рассмотрении
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = applications.map(app => `
        <tr>
            <td>#${app.id}</td>
            <td>${app.nickname}</td>
            <td>${app.telegram}</td>
            <td>${app.category}</td>
            <td>${new Date(app.submittedAt).toLocaleDateString('ru-RU')}</td>
            <td><span class="status-pending">На рассмотрении</span></td>
            <td>
                <button class="btn-small btn-view" onclick="viewApplication(${app.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-small btn-approve" onclick="approveApplication(${app.id})">
                    <i class="fas fa-check"></i>
                </button>
                <button class="btn-small btn-reject" onclick="showRejectForm(${app.id})">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Просмотр деталей заявки
async function viewApplication(id) {
    try {
        const response = await fetch(`${API_URL}/admin/applications/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (response.ok) {
            const application = await response.json();
            showApplicationDetails(application);
        }
    } catch (error) {
        console.error('Ошибка загрузки деталей заявки:', error);
        showError('Ошибка загрузки данных заявки');
    }
}

// Отображение деталей заявки в модальном окне
function showApplicationDetails(application) {
    const modal = document.getElementById('application-modal');
    const detailsContainer = document.getElementById('application-details');
    
    if (!modal || !detailsContainer) return;
    
    // Форматируем даты
    const submittedDate = new Date(application.submittedAt).toLocaleString('ru-RU');
    const decidedDate = application.decidedAt ? 
        new Date(application.decidedAt).toLocaleString('ru-RU') : 'Не решено';
    
    // Формируем HTML с деталями
    detailsContainer.innerHTML = `
        <div class="detail-group">
            <div class="detail-label">Никнейм:</div>
            <div class="detail-value">${application.nickname}</div>
        </div>
        
        <div class="detail-group">
            <div class="detail-label">Telegram:</div>
            <div class="detail-value">${application.telegram}</div>
        </div>
        
        <div class="detail-group">
            <div class="detail-label">Категория:</div>
            <div class="detail-value">${application.category}</div>
        </div>
        
        <div class="detail-group">
            <div class="detail-label">Роль/Статус:</div>
            <div class="detail-value">${application.role || 'Не указано'}</div>
        </div>
        
        <div class="detail-group">
            <div class="detail-label">Описание:</div>
            <div class="detail-value">${application.description}</div>
        </div>
        
        ${application.details ? `
        <div class="detail-group">
            <div class="detail-label">Подробная информация:</div>
            <div class="detail-value">${application.details}</div>
        </div>
        ` : ''}
        
        ${application.skills ? `
        <div class="detail-group">
            <div class="detail-label">Навыки:</div>
            <div class="detail-value">${application.skills}</div>
        </div>
        ` : ''}
        
        <div class="detail-group">
            <div class="detail-label">Ссылки:</div>
            <div class="detail-value">
                ${application.project ? `<div>Проект: ${application.project}</div>` : ''}
                ${application.website ? `<div>Сайт: ${application.website}</div>` : ''}
                ${application.github ? `<div>GitHub: ${application.github}</div>` : ''}
                ${application.vk ? `<div>VK: ${application.vk}</div>` : ''}
            </div>
        </div>
        
        <div class="detail-group">
            <div class="detail-label">Дополнительные услуги:</div>
            <div class="detail-value">
                ${application.wantVerified ? '✓ Верификация<br>' : ''}
                ${application.wantPinned ? '✓ Закрепление' : ''}
            </div>
        </div>
        
        <div class="detail-group">
            <div class="detail-label">Комментарий:</div>
            <div class="detail-value">${application.adminComment || 'Нет комментария'}</div>
        </div>
        
        ${application.avatar ? `
        <div class="detail-group">
            <div class="detail-label">Аватарка:</div>
            <img src="/uploads/avatars/${application.avatar}" alt="Аватар" class="avatar-preview">
        </div>
        ` : ''}
        
        <div class="detail-group">
            <div class="detail-label">Дата подачи:</div>
            <div class="detail-value">${submittedDate}</div>
        </div>
        
        <div class="detail-group">
            <div class="detail-label">Статус:</div>
            <div class="detail-value">
                <span class="status-${application.status}">
                    ${getStatusText(application.status)}
                </span>
            </div>
        </div>
        
        ${application.status !== 'pending' ? `
        <div class="detail-group">
            <div class="detail-label">Дата решения:</div>
            <div class="detail-value">${decidedDate}</div>
        </div>
        
        ${application.rejectionReason ? `
        <div class="detail-group">
            <div class="detail-label">Причина отклонения:</div>
            <div class="detail-value">${application.rejectionReason}</div>
        </div>
        ` : ''}
        
        <div class="detail-group">
            <div class="detail-label">Решено администратором:</div>
            <div class="detail-value">${application.decidedBy || 'Неизвестно'}</div>
        </div>
        ` : ''}
        
        ${application.status === 'pending' ? `
        <div class="action-buttons">
            <button class="btn-approve" onclick="approveApplication(${application.id})">
                <i class="fas fa-check"></i> Одобрить
            </button>
            <button class="btn-reject" onclick="showRejectForm(${application.id})">
                <i class="fas fa-times"></i> Отклонить
            </button>
        </div>
        ` : ''}
    `;
    
    // Показываем модальное окно
    modal.classList.add('active');
}

// Получение текстового представления статуса
function getStatusText(status) {
    const statusMap = {
        'pending': 'На рассмотрении',
        'approved': 'Одобрено',
        'rejected': 'Отклонено'
    };
    return statusMap[status] || status;
}

// Одобрение заявки
async function approveApplication(id) {
    if (!confirm('Вы уверены, что хотите одобрить эту заявку?')) return;
    
    try {
        const response = await fetch(`${API_URL}/admin/applications/${id}/approve`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                decidedBy: currentUser.username
            })
        });
        
        if (response.ok) {
            showSuccess('Заявка одобрена!');
            // Обновляем данные
            loadPendingApplications();
            loadStats();
            
            // Закрываем модальное окно если оно открыто
            const modal = document.getElementById('application-modal');
            if (modal) {
                modal.classList.remove('active');
            }
        } else {
            const data = await response.json();
            showError(data.message || 'Ошибка одобрения заявки');
        }
    } catch (error) {
        console.error('Ошибка одобрения заявки:', error);
        showError('Ошибка соединения с сервером');
    }
}

// Показ формы отклонения заявки
function showRejectForm(id) {
    const detailsContainer = document.getElementById('application-details');
    if (!detailsContainer) return;
    
    // Добавляем форму для указания причины
    const rejectForm = document.createElement('div');
    rejectForm.className = 'reject-form';
    rejectForm.id = 'reject-form';
    rejectForm.innerHTML = `
        <h4>Укажите причину отклонения:</h4>
        <textarea id="rejection-reason" placeholder="Причина отклонения..." rows="4"></textarea>
        <div class="action-buttons">
            <button class="btn-approve" onclick="rejectApplication(${id})">
                <i class="fas fa-times"></i> Подтвердить отклонение
            </button>
            <button class="btn-reject" onclick="hideRejectForm()">
                <i class="fas fa-arrow-left"></i> Назад
            </button>
        </div>
    `;
    
    // Находим контейнер с кнопками действий и заменяем его
    const actionButtons = detailsContainer.querySelector('.action-buttons');
    if (actionButtons) {
        actionButtons.style.display = 'none';
        actionButtons.parentNode.insertBefore(rejectForm, actionButtons.nextSibling);
    }
}

// Скрытие формы отклонения
function hideRejectForm() {
    const rejectForm = document.getElementById('reject-form');
    const actionButtons = document.querySelector('.action-buttons');
    
    if (rejectForm) rejectForm.remove();
    if (actionButtons) actionButtons.style.display = 'flex';
}

// Отклонение заявки
async function rejectApplication(id) {
    const reason = document.getElementById('rejection-reason')?.value.trim();
    
    if (!reason) {
        showError('Укажите причину отклонения');
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/admin/applications/${id}/reject`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rejectionReason: reason,
                decidedBy: currentUser.username
            })
        });
        
        if (response.ok) {
            showSuccess('Заявка отклонена');
            // Обновляем данные
            loadPendingApplications();
            loadStats();
            
            // Закрываем модальное окно
            const modal = document.getElementById('application-modal');
            if (modal) {
                modal.classList.remove('active');
            }
        } else {
            const data = await response.json();
            showError(data.message || 'Ошибка отклонения заявки');
        }
    } catch (error) {
        console.error('Ошибка отклонения заявки:', error);
        showError('Ошибка соединения с сервером');
    }
}

// Загрузка всех заявок с фильтрами
async function loadAllApplications(status = 'all', date = null) {
    try {
        let url = `${API_URL}/admin/applications`;
        const params = new URLSearchParams();
        
        if (status !== 'all') params.append('status', status);
        if (date) params.append('date', date);
        
        if (params.toString()) url += `?${params.toString()}`;
        
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (response.ok) {
            const applications = await response.json();
            renderAllApplications(applications);
        }
    } catch (error) {
        console.error('Ошибка загрузки всех заявок:', error);
    }
}

// Отображение всех заявок
function renderAllApplications(applications) {
    const tbody = document.getElementById('all-applications-body');
    if (!tbody) return;
    
    if (applications.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 30px; color: #888;">
                    Заявки не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = applications.map(app => `
        <tr>
            <td>#${app.id}</td>
            <td>${app.nickname}</td>
            <td>${app.category}</td>
            <td><span class="status-${app.status}">${getStatusText(app.status)}</span></td>
            <td>${new Date(app.submittedAt).toLocaleDateString('ru-RU')}</td>
            <td>${app.decidedAt ? new Date(app.decidedAt).toLocaleDateString('ru-RU') : '-'}</td>
            <td>
                <button class="btn-small btn-view" onclick="viewApplication(${app.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Загрузка участников
async function loadMembers() {
    try {
        const response = await fetch(`${API_URL}/admin/members`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (response.ok) {
            const members = await response.json();
            renderMembers(members);
        }
    } catch (error) {
        console.error('Ошибка загрузки участников:', error);
    }
}

// Отображение участников
function renderMembers(members) {
    const tbody = document.getElementById('members-body');
    if (!tbody) return;
    
    if (members.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 30px; color: #888;">
                    Участники не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = members.map(member => `
        <tr>
            <td>#${member.id}</td>
            <td>${member.nickname}</td>
            <td>${member.category}</td>
            <td>${member.verified ? '✓' : '✗'}</td>
            <td>${member.pinned ? '✓' : '✗'}</td>
            <td>${new Date(member.joinDate).toLocaleDateString('ru-RU')}</td>
            <td>
                <button class="btn-small btn-view" onclick="editMember(${member.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-small btn-reject" onclick="deleteMember(${member.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Загрузка пользователей
async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/admin/users`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (response.ok) {
            const users = await response.json();
            renderUsers(users);
        }
    } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
    }
}

// Отображение пользователей
function renderUsers(users) {
    const tbody = document.getElementById('users-body');
    if (!tbody) return;
    
    if (users.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 30px; color: #888;">
                    Пользователи не найдены
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = users.map(user => `
        <tr>
            <td>#${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${new Date(user.createdAt).toLocaleDateString('ru-RU')}</td>
            <td>${user.isActive ? 'Активен' : 'Заблокирован'}</td>
            <td>
                ${user.role !== 'admin' ? `
                <button class="btn-small btn-approve" onclick="toggleUserStatus(${user.id}, ${!user.isActive})">
                    <i class="fas fa-${user.isActive ? 'ban' : 'check'}"></i>
                </button>
                ` : ''}
            </td>
        </tr>
    `).join('');
}

// Инициализация админ-панели
function initAdminPanel() {
    // Проверяем доступ
    verifyAdminAccess().then(user => {
        if (user) {
            // Обновляем приветствие
            const welcomeMessage = document.getElementById('welcome-message');
            if (welcomeMessage) {
                welcomeMessage.textContent = `Добро пожаловать, ${user.username}!`;
            }
            
            // Загружаем статистику
            loadStats();
            
            // Загружаем начальные данные
            loadPendingApplications();
            loadAllApplications();
            loadMembers();
            loadUsers();
            
            // Настраиваем вкладки
            const tabs = document.querySelectorAll('.admin-tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabId = this.dataset.tab;
                    
                    // Обновляем активные вкладки
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === `${tabId}-tab`) {
                            content.classList.add('active');
                            
                            // При переключении на определенные вкладки обновляем данные
                            if (tabId === 'all-applications') {
                                loadAllApplications();
                            } else if (tabId === 'members') {
                                loadMembers();
                            } else if (tabId === 'users') {
                                loadUsers();
                            }
                        }
                    });
                });
            });
            
            // Настраиваем фильтры для всех заявок
            const statusFilter = document.getElementById('status-filter');
            const dateFilter = document.getElementById('date-filter');
            const filterBtn = document.getElementById('filter-btn');
            
            if (filterBtn) {
                filterBtn.addEventListener('click', function() {
                    const status = statusFilter ? statusFilter.value : 'all';
                    const date = dateFilter ? dateFilter.value : null;
                    loadAllApplications(status, date);
                });
            }
            
            // Настраиваем сохранение настроек
            const saveSettingsBtn = document.getElementById('save-settings');
            if (saveSettingsBtn) {
                saveSettingsBtn.addEventListener('click', saveSettings);
            }
            
            // Настраиваем выход
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', logout);
            }
        }
    });
}

// Сохранение настроек
async function saveSettings() {
    try {
        const settings = {
            entryPrice: document.getElementById('entry-price')?.value,
            verifyPrice: document.getElementById('verify-price')?.value,
            pinPrice: document.getElementById('pin-price')?.value
        };
        
        const response = await fetch(`${API_URL}/admin/settings`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(settings)
        });
        
        if (response.ok) {
            showSuccess('Настройки сохранены!');
        } else {
            showError('Ошибка сохранения настроек');
        }
    } catch (error) {
        console.error('Ошибка сохранения настроек:', error);
        showError('Ошибка соединения с сервером');
    }
}

// Выход из админ-панели
function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}

// Отображение ошибок
function showError(message) {
    alert(message); // В реальном проекте лучше использовать уведомления
}

// Отображение успешных сообщений
function showSuccess(message) {
    alert(message); // В реальном проекте лучше использовать уведомления
}

// Экспорт функций для глобального использования
window.admin = {
    viewApplication,
    approveApplication,
    showRejectForm,
    hideRejectForm,
    rejectApplication,
    logout
};

// Автоматическая инициализация
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('admin.html')) {
        initAdminPanel();
    }
});