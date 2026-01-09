// Данные участников
const members = [
    {
        id: 1,
        nickname: "зорф",
        username: "@tgzorf",
        category: "Владелец",
        role: "Владелец",
        description: "Владелец зорф Fame. Вход 50 зв, галочка 30зв, закреп 50зв.",
        avatar: "img/avatar1.png",
        verified: true,
        pinned: true,
        project: "https://t.me/NOOLSHY",
        telegram: "tgzorf",
        price: "https://noolshy.github.io/market/",
        chat: "https://t.me/NOOLSHY_CHAT",
        market: "https://noolshy.github.io/market/",
        fameList: "https://noolshy.github.io/fame/",
        github: "https://github.com/noolshy",
        joinDate: "2026-01-08",
        activity: "Постоянная",
        posts: 150,
        followers: 2500,
        priceEntry: "50 зв",
        priceVerified: "30 зв",
        pricePinned: "50 зв",
        details: "Создатель и владелец NoolShy Fame. Занимаюсь развитием сообщества и модерацией. Отвечаю на вопросы по поводу добавления в список и других услуг.",
        skills: ["Администрирование", "Модерация", "Развитие сообщества"],
        socials: {
            telegram: "@tgzorf",
            project: "https://t.me/NOOLSHY",
            price: "https://noolshy.github.io/market/"
        }
    },
    {
        id: 2,
        nickname: "francisco",
        username: "@pvpfrancisco",
        category: "Медийка",
        role: "Медийки",
        description: "в 2018 году состояла в комьюнити ВКонтакте, в стаке у рейзовых, в 2024 году перешла в комьюнити телеграмма...",
        avatar: "img/avatar2.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+LS2wWjAg8dYxOTNi",
        joinDate: "2026-01-08",
        activity: "Постоянная",
        details: "Медийная личность в NoolShy Fame.",
        skills: ["Медийная личность — это человек который имеет большую узнаваемость в комьюнити", "Развитие личности"],
        socials: {
            telegram: "@pvpfrancisco",
            project: "https://t.me/+LS2wWjAg8dYxOTNi",
        }
    },
    {
        id: 3,
        nickname: "francisco младший",
        username: "@oexwu",
        category: "Медийка",
        role: "Медийки",
        description: "пришел в км 2021 году состоял в Клане Министерство обороны...",
        avatar: "img/avatar3.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+lxGpVXheDIQ2OTRi",
        telegram: "oexwu",
        joinDate: "2026-01-08",
        activity: "Постоянная",
        details: "Медийная личность в NoolShy Fame.",
        skills: ["Медийная личность — это человек который имеет большую узнаваемость в комьюнити", "Развитие личности"],
        socials: {
            telegram: "@oexwu",
            project: "https://t.me/+lxGpVXheDIQ2OTRi",
        }
    },
    {
        id: 4,
        nickname: "madonna maniac",
        username: "@madonnamaniac",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "Пришел в комьюннити в начале 22 года,состоял в проекте security team...",
        avatar: "img/avatar4.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+WY-yRFYVxhJjNTFi",
        joinDate: "2026-01-08",
        activity: "Постоянная",
        details: "madonna maniac личность в NoolShy Fame.",
        skills: ["Средний фейм — это человек который имеет не большую узнаваемость в комьюнити", "Развитие личности"],
        socials: {
            telegram: "@madonnamaniac",
            project: "https://t.me/+WY-yRFYVxhJjNTFi",
        }
    },
];

// Текущие настройки
let currentTheme = 'dark';
let currentNeonColor = '#808080';
let currentNeonIntensity = 0.5;
let currentNeonSpeed = 5;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализация...');
    initNavigation();
    initMembers();
    initSettings();
});

// Инициализация навигации
function initNavigation() {
    console.log('Инициализация навигации...');
    
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.add('active');
            console.log('Меню открыто');
        });
    } else {
        console.error('Кнопка меню не найдена');
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            console.log('Меню закрыто');
        });
    }
    
    // Переключение секций
    const navTabs = document.querySelectorAll('.nav-tab');
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    
    function switchSection(sectionId) {
        console.log('Переключение на секцию:', sectionId);
        
        sections.forEach(section => {
            section.classList.remove('active-section');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            console.log('Секция активирована:', sectionId);
        } else {
            console.error('Секция не найдена:', sectionId);
        }
        
        navTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.section === sectionId) {
                tab.classList.add('active');
            }
        });
        
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            }
        });
    }
    
    navTabs.forEach(tab => {
        if (tab.dataset.section) {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                switchSection(tab.dataset.section);
            });
        }
    });
    
    menuItems.forEach(item => {
        if (item.dataset.section) {
            item.addEventListener('click', () => {
                switchSection(item.dataset.section);
                if (sideMenu) sideMenu.classList.remove('active');
            });
        }
    });
    
    // Специальные кнопки
    const faqBtn = document.getElementById('faq-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const menuSettings = document.getElementById('menu-settings');
    
    if (faqBtn) {
        faqBtn.addEventListener('click', () => {
            switchSection('faq-section');
        });
    }
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            openModal('settings-modal');
        });
    }
    
    if (menuSettings) {
        menuSettings.addEventListener('click', () => {
            openModal('settings-modal');
            if (sideMenu) sideMenu.classList.remove('active');
        });
    }
    
    console.log('Навигация инициализирована');
}

// Инициализация участников
function initMembers() {
    console.log('Инициализация участников...');
    loadMembers();
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.category;
                console.log('Фильтр:', category);
                filterMembers(category);
            });
        });
    } else {
        console.error('Кнопки фильтра не найдены');
    }
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Поиск:', searchTerm);
            searchMembers(searchTerm);
        });
    } else {
        console.error('Поле поиска не найдено');
    }
}

// Загрузка участников
function loadMembers() {
    const container = document.getElementById('members-container');
    if (!container) {
        console.error('Контейнер участников не найден');
        return;
    }
    
    container.innerHTML = '';
    
    if (members.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888; padding: 40px;">Нет участников для отображения</p>';
        console.log('Нет участников для отображения');
        return;
    }
    
    const sortedMembers = [...members].sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        if (a.verified && !b.verified) return -1;
        if (!a.verified && b.verified) return 1;
        return 0;
    });
    
    sortedMembers.forEach(member => {
        const card = createMemberCard(member);
        container.appendChild(card);
    });
    
    // Добавляем обработчики кликов на карточки
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.dataset.id;
            console.log('Клик по участнику:', memberId);
            showProfile(memberId);
        });
    });
    
    console.log('Участники загружены:', sortedMembers.length);
}

// Создание карточки участника
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.dataset.id = member.id;
    card.dataset.category = member.category;
    
    if (member.pinned) card.classList.add('pinned');
    if (member.verified) card.classList.add('verified');
    
    let badges = '';
    if (member.pinned) badges += '📍 ';
    if (member.verified) badges += '✓ ';
    
    card.innerHTML = `
        <div class="member-avatar">
            <img src="${member.avatar}" alt="${member.nickname}"
                 onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><rect width=\"60\" height=\"60\" fill=\"%23333\" rx=\"30\"/><text x=\"30\" y=\"30\" text-anchor=\"middle\" dy=\"0.35em\" font-family=\"Arial\" font-size=\"24\" fill=\"%23fff\">${member.nickname.charAt(0).toUpperCase()}</text></svg>'">
        </div>
        
        <div class="member-info">
            <h3>${member.nickname} ${member.verified ? '✓' : ''}</h3>
            <div class="member-role">${member.role}</div>
            <p class="member-description">${member.description}</p>
            <div class="member-badges">
                ${badges}${member.category}
            </div>
        </div>
    `;
    
    return card;
}

// Фильтрация участников
function filterMembers(category) {
    const cards = document.querySelectorAll('.member-card');
    console.log('Фильтрация участников по категории:', category, 'найдено карточек:', cards.length);
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Поиск участников
function searchMembers(term) {
    const cards = document.querySelectorAll('.member-card');
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
    
    cards.forEach(card => {
        const nickname = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.member-description').textContent.toLowerCase();
        
        const matchesSearch = nickname.includes(term) || description.includes(term);
        const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
        
        if (matchesSearch && matchesFilter) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Показать профиль участника
function showProfile(memberId) {
    const member = members.find(m => m.id == memberId);
    if (!member) {
        console.error('Участник не найден:', memberId);
        return;
    }
    
    const container = document.getElementById('profile-content');
    if (!container) {
        console.error('Контейнер профиля не найден');
        return;
    }
    
    // Форматирование даты
    const joinDate = new Date(member.joinDate);
    const formattedDate = joinDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Создание бейджей
    let badgesHtml = '';
    if (member.verified) badgesHtml += '<span class="badge verified">✓ Верифицирован</span>';
    if (member.pinned) badgesHtml += '<span class="badge pinned">📌 Закреплён</span>';
    badgesHtml += `<span class="badge category">${member.category}</span>`;
    
    // Основные кнопки
    let mainButtons = '';
    if (member.telegram) {
        mainButtons += `<a href="https://t.me/${member.telegram}" class="action-btn telegram" target="_blank">
            <i class="fab fa-telegram"></i> Написать в ЛС
        </a>`;
    }
    
    if (member.project) {
        mainButtons += `<a href="${member.project}" class="action-btn telegram" target="_blank">
            <i class="fas fa-external-link-alt"></i> Основной канал
        </a>`;
    }
    
    // Дополнительные кнопки
    let extraButtons = '';
    if (member.price) extraButtons += `<a href="${member.price}" class="action-btn" target="_blank">
        <i class="fas fa-tag"></i> Прайс
    </a>`;
    
    if (member.chat) extraButtons += `<a href="${member.chat}" class="action-btn telegram" target="_blank">
        <i class="fas fa-comments"></i> Чат
    </a>`;
    
    if (member.market) extraButtons += `<a href="${member.market}" class="action-btn" target="_blank">
        <i class="fas fa-shopping-cart"></i> Маркет
    </a>`;
    
    if (member.github) extraButtons += `<a href="${member.github}" class="action-btn" target="_blank">
        <i class="fab fa-github"></i> GitHub
    </a>`;
    
    container.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <img src="${member.avatar}" alt="${member.nickname}"
                     onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\"><rect width=\"120\" height=\"120\" fill=\"%23333\" rx=\"60\"/><text x=\"60\" y=\"60\" text-anchor=\"middle\" dy=\"0.35em\" font-family=\"Arial\" font-size=\"48\" fill=\"%23fff\">${member.nickname.charAt(0).toUpperCase()}</text></svg>'">
            </div>
            
            <h1 class="profile-title">${member.nickname}</h1>
            <p class="profile-username">${member.username}</p>
            
            <div class="profile-badges">
                ${badgesHtml}
            </div>
            
            <div class="profile-actions">
                ${mainButtons}
                <button class="action-btn" onclick="copyProfileLink('${member.nickname}')">
                    <i class="fas fa-share"></i> Поделиться
                </button>
            </div>
        </div>
        
        <div class="profile-content">
            <div class="profile-description">
                <h3>Описание</h3>
                <p>${member.description || 'Нет описания'}</p>
                
                ${member.details ? `
                    <h3 style="margin-top: 30px;">Детали</h3>
                    <p>${member.details}</p>
                ` : ''}
                
                ${member.skills && member.skills.length > 0 ? `
                    <h3 style="margin-top: 30px;">Навыки и специализация</h3>
                    <p>${member.skills.join(' • ')}</p>
                ` : ''}
                
                ${extraButtons ? `
                    <h3 style="margin-top: 30px;">Дополнительные ссылки</h3>
                    <div class="profile-actions">
                        ${extraButtons}
                    </div>
                ` : ''}
            </div>
            
            <div class="profile-stats">
                <h3>Статистика</h3>
                <div class="stat-item">
                    <span class="stat-label">Статус:</span>
                    <span class="stat-value">${member.role}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Верификация:</span>
                    <span class="stat-value">${member.verified ? '✓ Подтверждён' : '✗ Не подтверждён'}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Закреп:</span>
                    <span class="stat-value">${member.pinned ? '📌 Включён' : '✗ Выключен'}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Дата регистрации:</span>
                    <span class="stat-value">${formattedDate}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Активность:</span>
                    <span class="stat-value">${member.activity}</span>
                </div>
                ${member.followers ? `
                <div class="stat-item">
                    <span class="stat-label">Подписчики:</span>
                    <span class="stat-value">${member.followers}</span>
                </div>
                ` : ''}
                <div class="stat-item">
                    <span class="stat-label">ID:</span>
                    <span class="stat-value">${member.id}</span>
                </div>
                ${member.priceEntry ? `
                <div class="stat-item">
                    <span class="stat-label">Цена входа:</span>
                    <span class="stat-value">${member.priceEntry}</span>
                </div>
                ` : ''}
                ${member.priceVerified ? `
                <div class="stat-item">
                    <span class="stat-label">Цена галочки:</span>
                    <span class="stat-value">${member.priceVerified}</span>
                </div>
                ` : ''}
                ${member.pricePinned ? `
                <div class="stat-item">
                    <span class="stat-label">Цена закрепа:</span>
                    <span class="stat-value">${member.pricePinned}</span>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    
    switchSection('profile-details');
}

// Инициализация настроек
function initSettings() {
    const settingsTabs = document.querySelectorAll('.settings-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab + '-tab';
            
            settingsTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.dataset.theme;
            
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            applyTheme(theme);
        });
    });
    
    const bgUpload = document.getElementById('bg-upload');
    const bgPreview = document.getElementById('bg-preview');
    
    if (bgUpload) {
        bgUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    bgPreview.innerHTML = `<img src="${e.target.result}" alt="Фон" style="max-width:100%;border-radius:10px;">`;
                    bgPreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Применение темы
function applyTheme(theme) {
    console.log('Применение темы:', theme);
    // Здесь можно добавить логику изменения темы
}

// Открытие модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Модальное окно открыто:', modalId);
    } else {
        console.error('Модальное окно не найдено:', modalId);
    }
}

// Закрытие модального окна
function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Модальное окно закрыто');
    }
}

// Инициализация модальных окон
function initModals() {
    console.log('Инициализация модальных окон...');
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
    
    console.log('Модальные окна инициализированы');
}

// Глобальные функции
window.copyProfileLink = function(username) {
    const link = `https://t.me/NOOLSHY?text=Профиль%20${encodeURIComponent(username)}%20на%20NoolShy%20Fame`;
    navigator.clipboard.writeText(link).then(() => {
        alert('Ссылка на профиль скопирована в буфер обмена!');
    });
};

// Функция переключения секций
function switchSection(sectionId) {
    console.log('Переключение секции:', sectionId);
    
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }
    
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.section === sectionId) {
            tab.classList.add('active');
        }
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMembers();
    initSettings();
    initModals();
    
    // Закрытие модальных окон
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Клик вне модального окна для закрытия
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
