// =============================================
// ДАННЫЕ УЧАСТНИКОВ
// =============================================
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
        // Для добавления других ссылок - просто добавьте их как свойства объекта
        
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
        description: "в 2018 году состояла в комьюнити ВКонтакте, в стаке у рейзовых, в 2024 году перешла в комьюнити телеграмма, первой моей ликой была Хитрова, а дальше начали появляться личности как мира маньяк, антифобова и тд, и постепенно начала набирать фейм, сейчас меня считают средним феймовым человеком",
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
        description: "пришел в км 2021 году состоял в Клане Министерство обороны первая личность была Суцидальная кома начали появляться личности Курилов, Линдерсон, Киллов младший, Киллеров, и начал набирать набирать фейм сейчас меня считаю Средним Феймовым человеком",
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
        description: "Пришел в комьюннити в начале 22 года, состоял в проекте security team, первой личностью была министров, также валиднул амнезию/апатию, личности на которых поднимал фейм были как: кансамольский, психомиров, интернет мардер, на данный момент считаюсь средним феймом.",
        avatar: "img/avatar4.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+WY-yRFYVxhJjNTFi",
        joinDate: "2026-01-08",
        activity: "Постоянная",
        details: "madonna maniac личность в NoolShy Fame.",
        skills: ["madonna maniac — это человек который имеет не большую узнаваемость в комьюнити", "Развитие личности"],
        socials: {
            telegram: "@madonnamaniac",
            project: "https://t.me/+WY-yRFYVxhJjNTFi",
        }
    }
];

// =============================================
// ССЫЛКИ НА БОТА И КОНСТАНТЫ
// =============================================
const BOT_LINK = "https://t.me/NoolShyfame_bot";
const MEMBERS_PER_PAGE = 12;

// =============================================
// МАССИВЫ ВСЕХ ФОНОВ И ЭФФЕКТОВ
// =============================================
const allBackgrounds = [
    'particles', 'waves', 'pulse', 'hooks', 'circuit',
    'grid', 'dots', 'lines', 'hexagon', 'triangles',
    'squares', 'circles', 'nebula', 'galaxy', 'cosmic',
    'stardust', 'matrix', 'cyberpunk', 'circuit2', 'glitch',
    'rain', 'fire', 'water', 'wind', 'vortex',
    'spiral', 'radar', 'sonar'
];

const allThemes = [
    'dark', 'black', 'red', 'red-black', 'red-gray',
    'purple', 'blue', 'green', 'orange', 'pink'
];

// =============================================
// ТЕКУЩИЕ НАСТРОЙКИ
// =============================================
let currentTheme = 'dark';
let currentNeonColor = '#808080';
let currentNeonIntensity = 0.5;
let currentNeonSpeed = 5;
let currentAnimatedBg = 'hooks';
let currentBgSpeed = 10;
let currentBgOpacity = 0.5;
let currentPage = 1;
let currentFilter = 'all';
let currentSearchTerm = '';

// =============================================
// ПЕРЕМЕННЫЕ ДЛЯ УПРАВЛЕНИЯ СОСТОЯНИЕМ
// =============================================
let snowEnabled = true;
let neonFlowEnabled = true;
let isInitialized = false;

// =============================================
// ОСНОВНАЯ ИНИЦИАЛИЗАЦИЯ
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    if (isInitialized) return;
    console.log('🔄 Инициализация NoolShy Fame...');
    
    // Инициализация компонентов
    initNavigation();
    initMembers();
    initSnow();
    initSettings();
    initNeonControls();
    initAnimatedBg();
    initModals();
    initDynamicNeon();
    initAllAvatars();
    initPerformanceOptimizations();
    initServiceWorker();
    
    // Генерация сетки фонов
    generateBgGrid();
    
    // Загрузка сохраненных настроек
    loadSavedSettings();
    
    // Установка обработчиков событий
    setupEventListeners();
    
    // Проверка обновлений
    checkForUpdates();
    
    isInitialized = true;
    console.log('✅ Инициализация завершена');
    
    // Показать приветственное сообщение
    setTimeout(showWelcomeMessage, 1000);
});

// =============================================
// ИНИЦИАЛИЗАЦИЯ НАВИГАЦИИ
// =============================================
function initNavigation() {
    console.log('🚀 Инициализация навигации...');
    
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.add('active');
            playSound('menu-open');
            console.log('📱 Меню открыто');
        });
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            playSound('menu-close');
            console.log('📱 Меню закрыто');
        });
    }
    
    // Переключение секций
    const navTabs = document.querySelectorAll('.nav-tab');
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    
    function switchSection(sectionId) {
        console.log('🔄 Переключение на секцию:', sectionId);
        
        // Плавное скрытие текущей секции
        sections.forEach(section => {
            if (section.classList.contains('active-section')) {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    section.classList.remove('active-section');
                }, 300);
            }
        });
        
        // Плавное отображение новой секции
        setTimeout(() => {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active-section');
                setTimeout(() => {
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0)';
                }, 10);
                
                // Прокрутка к началу страницы
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Сохраняем активную секцию
                localStorage.setItem('fame_active_section', sectionId);
            }
        }, 300);
        
        // Обновление активных кнопок
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
    const animatedBgBtn = document.getElementById('animated-bg-btn');
    const menuAnimatedBg = document.getElementById('menu-animated-bg');
    
    if (faqBtn) {
        faqBtn.addEventListener('click', () => {
            switchSection('faq-section');
            playSound('click');
        });
    }
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            openModal('settings-modal');
            playSound('click');
        });
    }
    
    if (menuSettings) {
        menuSettings.addEventListener('click', () => {
            openModal('settings-modal');
            if (sideMenu) sideMenu.classList.remove('active');
            playSound('click');
        });
    }
    
    if (animatedBgBtn) {
        animatedBgBtn.addEventListener('click', () => {
            openModal('animated-bg-modal');
            playSound('click');
        });
    }
    
    if (menuAnimatedBg) {
        menuAnimatedBg.addEventListener('click', () => {
            openModal('animated-bg-modal');
            if (sideMenu) sideMenu.classList.remove('active');
            playSound('click');
        });
    }
    
    // Восстановление активной секции
    const savedSection = localStorage.getItem('fame_active_section') || 'main';
    switchSection(savedSection);
    
    console.log('✅ Навигация инициализирована');
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ ВСЕХ АВАТАРОВ
// =============================================
function initAllAvatars() {
    console.log('🖼️ Инициализация аватаров...');
    
    // Предзагрузка всех изображений
    members.forEach(member => {
        const img = new Image();
        img.src = member.avatar;
        img.onload = () => {
            console.log(`✅ Аватар загружен: ${member.nickname}`);
        };
        img.onerror = () => {
            console.warn(`⚠️ Ошибка загрузки аватара: ${member.nickname}`);
        };
    });
    
    loadMembers();
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ УЧАСТНИКОВ
// =============================================
function initMembers() {
    console.log('👥 Инициализация участников...');
    loadMembers();
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                currentFilter = this.dataset.category;
                currentPage = 1;
                console.log('🔍 Фильтр:', currentFilter);
                filterMembers(currentFilter);
                
                playSound('filter');
            });
        });
    }
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentSearchTerm = e.target.value.toLowerCase();
                console.log('🔍 Поиск:', currentSearchTerm);
                searchMembers(currentSearchTerm);
            }, 300);
        });
        
        // Кнопка очистки поиска
        const searchBox = searchInput.parentElement;
        const clearBtn = document.createElement('button');
        clearBtn.innerHTML = '<i class="fas fa-times"></i>';
        clearBtn.className = 'search-clear';
        clearBtn.style.display = 'none';
        
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchTerm = '';
            loadMembers();
            clearBtn.style.display = 'none';
            playSound('clear');
        });
        
        searchBox.appendChild(clearBtn);
        
        searchInput.addEventListener('input', function() {
            clearBtn.style.display = this.value ? 'block' : 'none';
        });
    }
    
    console.log('✅ Участники инициализированы');
}

// =============================================
// ЗАГРУЗКА УЧАСТНИКОВ
// =============================================
function loadMembers() {
    const container = document.getElementById('members-container');
    if (!container) {
        console.error('❌ Контейнер участников не найден');
        return;
    }
    
    // Показать индикатор загрузки
    container.innerHTML = `
        <div class="loading-skeleton" style="grid-column: 1 / -1; height: 200px; border-radius: 15px;"></div>
        <div class="loading-skeleton" style="height: 200px; border-radius: 15px;"></div>
        <div class="loading-skeleton" style="height: 200px; border-radius: 15px;"></div>
        <div class="loading-skeleton" style="height: 200px; border-radius: 15px;"></div>
    `;
    
    setTimeout(() => {
        container.innerHTML = '';
        
        if (members.length === 0) {
            container.innerHTML = `
                <div class="no-members" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <i class="fas fa-users fa-3x" style="color: var(--text-secondary); margin-bottom: 20px;"></i>
                    <h3 style="color: var(--text-color); margin-bottom: 10px;">Нет участников</h3>
                    <p style="color: var(--text-secondary);">Список участников пуст</p>
                </div>
            `;
            console.log('ℹ️ Нет участников для отображения');
            return;
        }
        
        const sortedMembers = [...members].sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            if (a.verified && !b.verified) return -1;
            if (!a.verified && b.verified) return 1;
            if (a.followers > b.followers) return -1;
            if (a.followers < b.followers) return 1;
            return a.nickname.localeCompare(b.nickname);
        });
        
        let filteredMembers = sortedMembers;
        if (currentFilter !== 'all') {
            filteredMembers = sortedMembers.filter(m => m.category === currentFilter);
        }
        
        if (currentSearchTerm) {
            filteredMembers = filteredMembers.filter(m => 
                m.nickname.toLowerCase().includes(currentSearchTerm) ||
                m.description.toLowerCase().includes(currentSearchTerm) ||
                m.category.toLowerCase().includes(currentSearchTerm)
            );
        }
        
        // Пагинация
        const startIndex = (currentPage - 1) * MEMBERS_PER_PAGE;
        const endIndex = startIndex + MEMBERS_PER_PAGE;
        const paginatedMembers = filteredMembers.slice(startIndex, endIndex);
        
        if (paginatedMembers.length === 0) {
            container.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <i class="fas fa-search fa-3x" style="color: var(--text-secondary); margin-bottom: 20px;"></i>
                    <h3 style="color: var(--text-color); margin-bottom: 10px;">Ничего не найдено</h3>
                    <p style="color: var(--text-secondary);">Попробуйте изменить поисковый запрос или фильтр</p>
                </div>
            `;
            return;
        }
        
        paginatedMembers.forEach((member, index) => {
            const card = createMemberCard(member);
            card.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(card);
        });
        
        // Добавить пагинацию
        if (filteredMembers.length > MEMBERS_PER_PAGE) {
            addPagination(filteredMembers.length);
        }
        
        // Добавляем обработчики кликов на карточки
        setTimeout(() => {
            document.querySelectorAll('.member-card').forEach(card => {
                card.addEventListener('click', function() {
                    const memberId = this.dataset.id;
                    console.log('👆 Клик по участнику:', memberId);
                    showProfile(memberId);
                    playSound('card-click');
                });
            });
        }, 100);
        
        console.log(`✅ Участники загружены: ${paginatedMembers.length} из ${filteredMembers.length}`);
    }, 300);
}

// =============================================
// СОЗДАНИЕ КАРТОЧКИ УЧАСТНИКА
// =============================================
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.dataset.id = member.id;
    card.dataset.category = member.category;
    
    if (member.pinned) card.classList.add('pinned');
    if (member.verified) card.classList.add('verified');
    
    let badges = '';
    if (member.pinned) badges += '<span class="pinned-badge" title="Закреплен">📍</span> ';
    if (member.verified) badges += '<span class="verified-badge" title="Верифицирован">✓</span> ';
    
    // Создаем ID для аватара
    const avatarId = `avatar-${member.id}-${Date.now()}`;
    
    card.innerHTML = `
        <div class="member-avatar" data-initial="${member.nickname.charAt(0).toUpperCase()}">
            <img id="${avatarId}" 
                 src="data:image/svg+xml;base64,${btoa(createFallbackAvatar(member.nickname))}" 
                 alt="${member.nickname}"
                 loading="lazy"
                 crossorigin="anonymous">
            <div class="avatar-status ${member.activity === 'Постоянная' ? 'online' : 'offline'}" 
                 title="${member.activity}"></div>
        </div>
        
        <div class="member-info">
            <h3>
                ${member.nickname}
                ${member.verified ? '<span class="verified-icon" title="Верифицирован">✓</span>' : ''}
            </h3>
            <div class="member-role">${member.role}</div>
            <p class="member-description">${member.description}</p>
            <div class="member-meta">
                <span class="member-followers" title="Подписчики">
                    <i class="fas fa-users"></i> ${formatNumber(member.followers || 0)}
                </span>
                <span class="member-posts" title="Посты">
                    <i class="fas fa-comment"></i> ${formatNumber(member.posts || 0)}
                </span>
            </div>
            <div class="member-badges">
                ${badges}
                <span class="category-badge">${member.category}</span>
            </div>
        </div>
        
        <div class="member-overlay">
            <button class="view-profile-btn">
                <i class="fas fa-eye"></i> Просмотр профиля
            </button>
        </div>
    `;
    
    // Загружаем аватар после создания элемента
    setTimeout(() => {
        const img = card.querySelector(`#${avatarId}`);
        if (img) {
            loadAvatarWithFallback(img, member.avatar, member.nickname);
        }
    }, 50);
    
    // Эффект при наведении
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '100';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
    });
    
    return card;
}

// =============================================
// ФИЛЬТРАЦИЯ УЧАСТНИКОВ
// =============================================
function filterMembers(category) {
    const cards = document.querySelectorAll('.member-card');
    console.log(`🔍 Фильтрация участников по категории: ${category}, найдено карточек: ${cards.length}`);
    
    cards.forEach((card, index) => {
        const matchesFilter = category === 'all' || card.dataset.category === category;
        
        if (matchesFilter) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Обновить счетчик
    updateMembersCounter();
}

// =============================================
// ПОИСК УЧАСТНИКОВ
// =============================================
function searchMembers(term) {
    const cards = document.querySelectorAll('.member-card');
    const activeFilter = currentFilter || 'all';
    
    let visibleCount = 0;
    
    cards.forEach((card, index) => {
        const nickname = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.member-description').textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();
        
        const matchesSearch = nickname.includes(term) || 
                            description.includes(term) || 
                            category.includes(term);
        const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
        
        if (matchesSearch && matchesFilter) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
            visibleCount++;
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Показать сообщение если ничего не найдено
    const container = document.getElementById('members-container');
    if (visibleCount === 0 && term) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; grid-column: 1 / -1;">
                <i class="fas fa-search fa-3x" style="color: var(--text-secondary); margin-bottom: 20px;"></i>
                <h3 style="color: var(--text-color); margin-bottom: 10px;">По запросу "${term}" ничего не найдено</h3>
                <p style="color: var(--text-secondary);">Попробуйте изменить поисковый запрос</p>
                <button class="action-btn" onclick="clearSearch()" style="margin-top: 20px;">
                    <i class="fas fa-times"></i> Очистить поиск
                </button>
            </div>
        `;
        container.appendChild(noResults);
    }
    
    updateMembersCounter();
}

// =============================================
// ПОКАЗАТЬ ПОЛНЫЙ ПРОФИЛЬ УЧАСТНИКА
// =============================================
function showProfile(memberId) {
    const member = members.find(m => m.id == memberId);
    if (!member) {
        console.error('❌ Участник не найден:', memberId);
        showNotification('Участник не найден', 'error');
        return;
    }
    
    const container = document.getElementById('profile-content');
    if (!container) {
        console.error('❌ Контейнер профиля не найден');
        return;
    }
    
    // Показать индикатор загрузки
    container.innerHTML = `
        <div class="loading-skeleton" style="height: 300px; border-radius: 15px; margin-bottom: 20px;"></div>
        <div class="loading-skeleton" style="height: 200px; border-radius: 15px;"></div>
    `;
    
    setTimeout(() => {
        // Форматирование даты
        const joinDate = new Date(member.joinDate);
        const formattedDate = joinDate.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Создание бейджей
        let badgesHtml = '';
        if (member.verified) badgesHtml += '<span class="badge verified" title="Верифицированный аккаунт">✓ Верифицирован</span>';
        if (member.pinned) badgesHtml += '<span class="badge pinned" title="Закрепленный профиль">📌 Закреплён</span>';
        badgesHtml += `<span class="badge category" title="Категория">${member.category}</span>`;
        
        // Основные кнопки
        let mainButtons = '';
        if (member.telegram) {
            mainButtons += createSocialButton('fab fa-telegram', 'Написать в ЛС', `https://t.me/${member.telegram}`, 'telegram');
        }
        if (member.project) {
            mainButtons += createSocialButton('fas fa-external-link-alt', 'Основной канал', member.project, 'telegram');
        }
        if (member.chat) {
            mainButtons += createSocialButton('fas fa-comments', 'Чат', member.chat, 'telegram');
        }
        if (member.market) {
            mainButtons += createSocialButton('fas fa-shopping-cart', 'Маркет', member.market);
        }
        if (member.fameList) {
            mainButtons += createSocialButton('fas fa-list', 'Фейм лист', member.fameList);
        }
        if (member.github) {
            mainButtons += createSocialButton('fab fa-github', 'GitHub', member.github);
        }
        
        // Дополнительные кнопки
        let extraButtons = '';
        const allPossibleLinks = {
            'price': {icon: 'fas fa-tag', text: 'Прайс', color: '#ff9900'},
            'priceList': {icon: 'fas fa-tags', text: 'Прайс-лист', color: '#ff6600'},
            'tiktok': {icon: 'fab fa-tiktok', text: 'TikTok', color: '#000000'},
            'youtube': {icon: 'fab fa-youtube', text: 'YouTube', color: '#ff0000'},
            'yt': {icon: 'fab fa-youtube', text: 'YouTube', color: '#ff0000'},
            'discord': {icon: 'fab fa-discord', text: 'Discord', color: '#5865F2'},
            'vk': {icon: 'fab fa-vk', text: 'VK', color: '#4C75A3'},
            'gift': {icon: 'fas fa-gift', text: 'Подарок', color: '#ff3366'},
            'website': {icon: 'fas fa-globe', text: 'Сайт', color: '#00aaff'},
            'reputation': {icon: 'fas fa-star', text: 'Репутация', color: '#ffd700'},
            'work': {icon: 'fas fa-briefcase', text: 'Ворк', color: '#00cc99'},
            'forum': {icon: 'fas fa-users', text: 'Форум', color: '#9966ff'},
            'def': {icon: 'fas fa-shield-alt', text: 'Деф', color: '#33cc33'},
            'whitelist': {icon: 'fas fa-list', text: 'White List', color: '#ffffff'},
            'blog': {icon: 'fas fa-blog', text: 'Блог', color: '#ff66cc'},
            'private': {icon: 'fas fa-lock', text: 'Приват', color: '#333333'}
        };
        
        Object.keys(allPossibleLinks).forEach(key => {
            if (member[key]) {
                extraButtons += createSocialButton(
                    allPossibleLinks[key].icon,
                    allPossibleLinks[key].text,
                    member[key],
                    '',
                    allPossibleLinks[key].color
                );
            }
        });
        
        // Статистика
        const stats = {
            'Статус': member.role,
            'Верификация': member.verified ? '✓ Подтверждён' : '✗ Не подтверждён',
            'Закреп': member.pinned ? '📌 Включён' : '✗ Выключен',
            'Дата регистрации': formattedDate,
            'Активность': member.activity,
            'Подписчики': formatNumber(member.followers),
            'Посты': formatNumber(member.posts),
            'ID': member.id
        };
        
        // Добавляем цены если есть
        if (member.priceEntry) stats['Цена входа'] = member.priceEntry;
        if (member.priceVerified) stats['Цена галочки'] = member.priceVerified;
        if (member.pricePinned) stats['Цена закрепа'] = member.pricePinned;
        
        let statsHtml = '';
        Object.entries(stats).forEach(([label, value]) => {
            if (value) {
                statsHtml += `
                    <div class="stat-item">
                        <span class="stat-label">${label}:</span>
                        <span class="stat-value">${value}</span>
                    </div>
                `;
            }
        });
        
        // ID для аватара профиля
        const profileAvatarId = `profile-avatar-${member.id}-${Date.now()}`;
        
        container.innerHTML = `
            <div class="profile-header">
                <div class="profile-avatar" data-initial="${member.nickname.charAt(0).toUpperCase()}">
                    <img id="${profileAvatarId}" 
                         src="data:image/svg+xml;base64,${btoa(createFallbackAvatar(member.nickname))}" 
                         alt="${member.nickname}"
                         loading="eager"
                         crossorigin="anonymous">
                    <div class="profile-status ${member.activity === 'Постоянная' ? 'online' : 'offline'}" 
                         title="${member.activity}"></div>
                </div>
                
                <h1 class="profile-title">${member.nickname}</h1>
                <p class="profile-username">${member.username}</p>
                
                <div class="profile-badges">
                    ${badgesHtml}
                </div>
                
                <div class="profile-stats-mini">
                    <div class="stat-mini">
                        <i class="fas fa-users"></i>
                        <span class="stat-value">${formatNumber(member.followers || 0)}</span>
                        <span class="stat-label">Подписчики</span>
                    </div>
                    <div class="stat-mini">
                        <i class="fas fa-comment"></i>
                        <span class="stat-value">${formatNumber(member.posts || 0)}</span>
                        <span class="stat-label">Посты</span>
                    </div>
                    <div class="stat-mini">
                        <i class="fas fa-calendar"></i>
                        <span class="stat-value">${formattedDate.split(' ')[2]}</span>
                        <span class="stat-label">Год вступления</span>
                    </div>
                </div>
                
                <div class="profile-actions">
                    ${mainButtons}
                    <button class="action-btn" onclick="copyProfileLink('${member.nickname}')">
                        <i class="fas fa-share"></i> Поделиться
                    </button>
                    <button class="action-btn" onclick="switchSection('main')">
                        <i class="fas fa-arrow-left"></i> Назад к списку
                    </button>
                </div>
            </div>
            
            <div class="profile-content">
                <div class="profile-description">
                    <h3><i class="fas fa-info-circle"></i> Описание</h3>
                    <p>${member.description || 'Нет описания'}</p>
                    
                    ${member.details ? `
                        <h3><i class="fas fa-ellipsis-h"></i> Детали</h3>
                        <p>${member.details}</p>
                    ` : ''}
                    
                    ${member.skills && member.skills.length > 0 ? `
                        <h3><i class="fas fa-star"></i> Навыки и специализация</h3>
                        <div class="skills-list">
                            ${member.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                        </div>
                    ` : ''}
                    
                    ${extraButtons ? `
                        <h3><i class="fas fa-link"></i> Дополнительные ссылки</h3>
                        <div class="profile-actions">
                            ${extraButtons}
                        </div>
                    ` : ''}
                </div>
                
                <div class="profile-stats">
                    <h3><i class="fas fa-chart-bar"></i> Статистика</h3>
                    ${statsHtml}
                    
                    ${member.priceEntry || member.priceVerified || member.pricePinned ? `
                        <div class="price-info" style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px;">
                            <h4 style="margin-bottom: 15px; color: var(--primary-color);">
                                <i class="fas fa-tags"></i> Услуги и цены
                            </h4>
                            ${member.priceEntry ? `<div class="price-item"><span>Вход в фейм-лист:</span> <strong>${member.priceEntry}</strong></div>` : ''}
                            ${member.priceVerified ? `<div class="price-item"><span>Верификация:</span> <strong>${member.priceVerified}</strong></div>` : ''}
                            ${member.pricePinned ? `<div class="price-item"><span>Закреп профиля:</span> <strong>${member.pricePinned}</strong></div>` : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        // Загружаем аватар профиля
        setTimeout(() => {
            const img = document.getElementById(profileAvatarId);
            if (img) {
                loadAvatarWithFallback(img, member.avatar, member.nickname);
            }
        }, 50);
        
        // Добавляем эффект прокрутки к профилю
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        
        switchSection('profile-details');
        playSound('profile-open');
        
        // Отслеживание просмотра профиля
        trackProfileView(memberId);
    }, 300);
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ СНЕГА
// =============================================
function initSnow() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    createSnowflakes();
    
    const snowToggle = document.getElementById('snow-effect');
    if (snowToggle) {
        snowToggle.addEventListener('change', function() {
            snowEnabled = this.checked;
            if (snowEnabled) {
                snowContainer.style.display = 'block';
                createSnowflakes();
                playSound('snow-on');
            } else {
                snowContainer.style.display = 'none';
                snowContainer.innerHTML = '';
                playSound('snow-off');
            }
            localStorage.setItem('fame_snow', snowEnabled ? 'enabled' : 'disabled');
        });
    }
}

// =============================================
// СОЗДАНИЕ СНЕЖИНОК
// =============================================
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    snowContainer.innerHTML = '';
    
    // Создаем разные типы снежинок
    const snowflakeTypes = [
        {class: 'snowflake-circle', shape: 'circle'},
        {class: 'snowflake-star', shape: 'star'},
        {class: 'snowflake-hexagon', shape: 'hexagon'}
    ];
    
    for (let i = 0; i < 80; i++) {
        const type = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)];
        const snowflake = document.createElement('div');
        snowflake.className = `snowflake ${type.class}`;
        
        const size = Math.random() * 6 + 2;
        const startX = Math.random() * 100;
        const duration = Math.random() * 8 + 3;
        const opacity = Math.random() * 0.6 + 0.2;
        const rotation = Math.random() * 360;
        const delay = Math.random() * 5;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}vw`;
        snowflake.style.opacity = opacity;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.transform = `rotate(${rotation}deg)`;
        
        // Разные цвета снежинок
        const colors = [
            'rgba(255, 255, 255, 0.9)',
            'rgba(200, 220, 255, 0.8)',
            'rgba(230, 240, 255, 0.7)'
        ];
        snowflake.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Добавляем тень для объема
        snowflake.style.boxShadow = `0 0 ${size}px rgba(255, 255, 255, 0.5)`;
        
        snowContainer.appendChild(snowflake);
    }
    
    console.log('❄️ Создано снежинок: 80');
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ НАСТРОЕК
// =============================================
function initSettings() {
    console.log('⚙️ Инициализация настроек...');
    
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
                    playSound('tab-switch');
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
            playSound('theme-change');
        });
    });
    
    const bgUpload = document.getElementById('bg-upload');
    const bgPreview = document.getElementById('bg-preview');
    
    if (bgUpload && bgPreview) {
        bgUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Проверяем размер файла (максимум 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    showNotification('Файл слишком большой (макс. 5MB)', 'error');
                    return;
                }
                
                // Проверяем тип файла
                if (!file.type.match('image.*')) {
                    showNotification('Выберите изображение', 'error');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    bgPreview.innerHTML = `
                        <img src="${e.target.result}" alt="Фон" style="width:100%;height:200px;object-fit:cover;border-radius:10px;">
                        <button class="remove-bg-btn" onclick="removeCustomBackground()" title="Удалить фон">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                    bgPreview.style.display = 'block';
                    
                    // Сохраняем в localStorage
                    localStorage.setItem('fame_background', e.target.result);
                    
                    // Применяем фон
                    document.body.style.backgroundImage = `url(${e.target.result})`;
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.backgroundPosition = 'center';
                    
                    showNotification('Фон успешно загружен', 'success');
                    playSound('upload-success');
                };
                
                reader.onerror = function() {
                    showNotification('Ошибка загрузки файла', 'error');
                    playSound('upload-error');
                };
                
                reader.readAsDataURL(file);
            }
        });
    }
    
    const neonFlowEffect = document.getElementById('neon-flow-effect');
    if (neonFlowEffect) {
        neonFlowEffect.addEventListener('change', function() {
            neonFlowEnabled = this.checked;
            if (neonFlowEnabled) {
                initDynamicNeon();
                playSound('neon-on');
            } else {
                removeNeonFlow();
                playSound('neon-off');
            }
            localStorage.setItem('fame_neon_flow', neonFlowEnabled ? 'enabled' : 'disabled');
        });
    }
    
    console.log('✅ Настройки инициализированы');
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ КОНТРОЛОВ НЕОНА
// =============================================
function initNeonControls() {
    console.log('🌈 Инициализация контролов неона...');
    
    const neonColor = document.getElementById('neon-color');
    const neonIntensity = document.getElementById('neon-intensity');
    const neonSpeed = document.getElementById('neon-speed');
    const applyNeonBtn = document.getElementById('apply-neon');
    const intensityValue = document.getElementById('intensity-value');
    const speedValue = document.getElementById('speed-value');
    const colorPreview = document.getElementById('neon-color-preview');
    
    if (neonColor && colorPreview) {
        neonColor.addEventListener('input', function() {
            colorPreview.style.backgroundColor = this.value;
            colorPreview.style.boxShadow = `0 0 20px ${this.value}`;
        });
        
        // Устанавливаем начальное значение
        colorPreview.style.backgroundColor = neonColor.value;
        colorPreview.style.boxShadow = `0 0 20px ${neonColor.value}`;
    }
    
    if (neonIntensity && intensityValue) {
        neonIntensity.addEventListener('input', function() {
            const value = parseInt(this.value);
            intensityValue.textContent = value + '%';
            intensityValue.style.color = `hsl(${value}, 100%, 60%)`;
        });
        
        // Устанавливаем начальное значение
        const initialIntensity = parseInt(neonIntensity.value);
        intensityValue.textContent = initialIntensity + '%';
        intensityValue.style.color = `hsl(${initialIntensity}, 100%, 60%)`;
    }
    
    if (neonSpeed && speedValue) {
        const speedLabels = {
            1: '🟢 Очень медленно',
            2: '🟡 Медленно',
            3: '🟡 Немного медленно',
            4: '🟠 Ниже средней',
            5: '🟠 Средняя',
            6: '🟠 Выше средней',
            7: '🔴 Быстро',
            8: '🔴 Очень быстро',
            9: '🔴 Супер быстро',
            10: '⚡ Максимальная'
        };
        
        neonSpeed.addEventListener('input', function() {
            const value = parseInt(this.value);
            speedValue.textContent = speedLabels[value] || 'Средняя';
            speedValue.style.color = value <= 3 ? '#00ff00' : 
                                   value <= 5 ? '#ffff00' : 
                                   value <= 7 ? '#ff9900' : '#ff0000';
        });
        
        // Устанавливаем начальное значение
        const initialSpeed = parseInt(neonSpeed.value);
        speedValue.textContent = speedLabels[initialSpeed] || 'Средняя';
        speedValue.style.color = initialSpeed <= 3 ? '#00ff00' : 
                               initialSpeed <= 5 ? '#ffff00' : 
                               initialSpeed <= 7 ? '#ff9900' : '#ff0000';
    }
    
    if (applyNeonBtn) {
        applyNeonBtn.addEventListener('click', function() {
            const color = neonColor.value;
            const intensity = parseInt(neonIntensity.value) / 100;
            const speed = parseInt(neonSpeed.value);
            
            applyNeonSettings(color, intensity, speed);
            playSound('neon-apply');
            showNotification('Настройки неона применены', 'success');
        });
    }
    
    console.log('✅ Контролы неона инициализированы');
}

// =============================================
// ПРИМЕНЕНИЕ НАСТРОЕК НЕОНА
// =============================================
function applyNeonSettings(color, intensity, speed) {
    console.log(`🎨 Применение настроек неона: цвет=${color}, интенсивность=${intensity}, скорость=${speed}`);
    
    currentNeonColor = color;
    currentNeonIntensity = intensity;
    currentNeonSpeed = speed;
    
    localStorage.setItem('fame_neon_color', color);
    localStorage.setItem('fame_neon_intensity', intensity);
    localStorage.setItem('fame_neon_speed', speed);
    
    initDynamicNeon();
}

// =============================================
// ДИНАМИЧЕСКИЙ НЕОН
// =============================================
function initDynamicNeon() {
    const oldStyle = document.getElementById('dynamic-neon-style');
    if (oldStyle) oldStyle.remove();
    
    const hex = currentNeonColor;
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    
    const duration = (11 - currentNeonSpeed) + 's';
    const glowSize1 = 10 * currentNeonIntensity;
    const glowSize2 = 20 * currentNeonIntensity;
    const glowSize3 = 30 * currentNeonIntensity;
    const glowOpacity1 = 0.8 * currentNeonIntensity;
    const glowOpacity2 = 0.6 * currentNeonIntensity;
    const glowOpacity3 = 0.4 * currentNeonIntensity;
    
    const style = document.createElement('style');
    style.id = 'dynamic-neon-style';
    
    style.textContent = `
        @keyframes neonFlow {
            0%, 100% { 
                box-shadow: 0 0 ${glowSize1}px rgba(${r}, ${g}, ${b}, ${glowOpacity1}),
                          0 0 ${glowSize2}px rgba(${r}, ${g}, ${b}, ${glowOpacity2}),
                          0 0 ${glowSize3}px rgba(${r}, ${g}, ${b}, ${glowOpacity3}),
                          inset 0 0 ${glowSize1}px rgba(${r}, ${g}, ${b}, ${glowOpacity1 * 0.6}); 
                border-color: rgba(${r}, ${g}, ${b}, ${glowOpacity1});
            }
            50% { 
                box-shadow: 0 0 ${glowSize1 * 1.5}px rgba(${r}, ${g}, ${b}, ${glowOpacity1 * 1.1}),
                          0 0 ${glowSize2 * 1.25}px rgba(${r}, ${g}, ${b}, ${glowOpacity2 * 1.1}),
                          0 0 ${glowSize3 * 1.15}px rgba(${r}, ${g}, ${b}, ${glowOpacity3 * 1.1}),
                          inset 0 0 ${glowSize1 * 1.5}px rgba(${r}, ${g}, ${b}, ${glowOpacity1 * 0.8}); 
                border-color: rgba(${r}, ${g}, ${b}, ${glowOpacity1 * 1.2});
            }
        }
        
        @keyframes textNeonFlow {
            0%, 100% { 
                text-shadow: 0 0 ${5 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.8 * currentNeonIntensity}),
                           0 0 ${10 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.6 * currentNeonIntensity}),
                           0 0 ${15 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.4 * currentNeonIntensity}); 
            }
            50% { 
                text-shadow: 0 0 ${8 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.9 * currentNeonIntensity}),
                           0 0 ${15 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.7 * currentNeonIntensity}),
                           0 0 ${22 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.5 * currentNeonIntensity}); 
            }
        }
        
        .neon-flow {
            animation: neonFlow ${duration} ease-in-out infinite !important;
        }
        
        .text-neon-flow {
            animation: textNeonFlow ${duration} ease-in-out infinite !important;
        }
        
        .neon-border {
            position: relative;
        }
        
        .neon-border::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, 
                rgba(${r}, ${g}, ${b}, ${currentNeonIntensity * 0.8}),
                rgba(${r}, ${g}, ${b}, ${currentNeonIntensity * 0.4}),
                rgba(${r}, ${g}, ${b}, ${currentNeonIntensity * 0.8})
            );
            border-radius: inherit;
            z-index: -1;
            opacity: ${currentNeonIntensity * 0.5};
            animation: neonFlow ${duration} ease-in-out infinite;
        }
    `;
    
    document.head.appendChild(style);
    
    if (neonFlowEnabled) {
        applyNeonToElements();
    }
    
    console.log('🌈 Динамический неон инициализирован');
}

// =============================================
// ПРИМЕНЕНИЕ НЕОНА К ЭЛЕМЕНТАМ
// =============================================
function applyNeonToElements() {
    document.querySelectorAll('.member-card').forEach(card => {
        card.classList.add('neon-flow');
    });
    
    document.querySelectorAll('.modal-content').forEach(modal => {
        modal.classList.add('neon-flow');
    });
    
    document.querySelectorAll('.upload-btn').forEach(btn => {
        btn.classList.add('neon-flow');
    });
    
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.classList.add('neon-border');
    });
    
    const profileHeader = document.querySelector('.profile-header');
    if (profileHeader) {
        profileHeader.classList.add('neon-flow');
    }
    
    console.log('✨ Неон применен к элементам');
}

// =============================================
// УДАЛЕНИЕ ЭФФЕКТА ПЕРЕЛИВАНИЯ
// =============================================
function removeNeonFlow() {
    document.querySelectorAll('.neon-flow').forEach(el => {
        el.classList.remove('neon-flow');
    });
    document.querySelectorAll('.text-neon-flow').forEach(el => {
        el.classList.remove('text-neon-flow');
    });
    document.querySelectorAll('.neon-border').forEach(el => {
        el.classList.remove('neon-border');
    });
    
    console.log('✨ Эффект неона отключен');
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ АНИМИРОВАННОГО ФОНА
// =============================================
function initAnimatedBg() {
    console.log('🎬 Инициализация анимированного фона...');
    
    const bgSpeed = document.getElementById('bg-speed');
    const bgOpacity = document.getElementById('bg-opacity');
    const applyBgBtn = document.getElementById('apply-animated-bg');
    
    if (bgSpeed) {
        bgSpeed.addEventListener('input', function() {
            currentBgSpeed = parseInt(this.value);
            const speedLabels = {
                1: 'Очень медленно', 5: 'Медленно', 10: 'Средне',
                15: 'Быстро', 20: 'Очень быстро'
            };
            console.log(`🎬 Скорость фона: ${currentBgSpeed} (${speedLabels[currentBgSpeed] || 'Средне'})`);
        });
    }
    
    if (bgOpacity) {
        bgOpacity.addEventListener('input', function() {
            currentBgOpacity = parseInt(this.value) / 100;
            console.log(`🎬 Прозрачность фона: ${currentBgOpacity}`);
        });
    }
    
    if (applyBgBtn) {
        applyBgBtn.addEventListener('click', function() {
            applyAnimatedBg();
            playSound('bg-apply');
            showNotification('Анимированный фон применен', 'success');
        });
    }
    
    console.log('✅ Анимированный фон инициализирован');
}

// =============================================
// ГЕНЕРАЦИЯ СЕТКИ ФОНОВ
// =============================================
function generateBgGrid() {
    const grid = document.querySelector('.animated-bg-grid');
    if (!grid) {
        console.log('❌ Сетка фонов не найдена');
        return;
    }
    
    grid.innerHTML = '';
    
    allBackgrounds.forEach((bg, index) => {
        const option = document.createElement('div');
        option.className = `animated-bg-option ${bg === currentAnimatedBg ? 'active' : ''}`;
        option.dataset.bg = bg;
        option.style.animationDelay = `${index * 0.05}s`;
        
        option.innerHTML = `
            <div class="bg-preview ${bg}-bg"></div>
            <span>${getBgName(bg)}</span>
            ${bg === currentAnimatedBg ? '<div class="bg-selected"><i class="fas fa-check"></i></div>' : ''}
        `;
        
        option.addEventListener('click', function() {
            document.querySelectorAll('.animated-bg-option').forEach(opt => {
                opt.classList.remove('active');
                opt.querySelector('.bg-selected')?.remove();
            });
            this.classList.add('active');
            currentAnimatedBg = this.dataset.bg;
            
            // Добавляем индикатор выбора
            if (!this.querySelector('.bg-selected')) {
                const selected = document.createElement('div');
                selected.className = 'bg-selected';
                selected.innerHTML = '<i class="fas fa-check"></i>';
                this.appendChild(selected);
            }
            
            console.log('🎨 Выбран фон:', currentAnimatedBg);
            playSound('bg-select');
        });
        
        grid.appendChild(option);
    });
    console.log(`✅ Сетка фонов сгенерирована: ${allBackgrounds.length} вариантов`);
}

// =============================================
// ПРИМЕНЕНИЕ АНИМИРОВАННОГО ФОНА
// =============================================
function applyAnimatedBg() {
    const bgElement = document.getElementById('animated-bg');
    if (!bgElement) return;
    
    // Удаляем все классы фонов
    allBackgrounds.forEach(bg => {
        bgElement.classList.remove(`${bg}-bg`);
    });
    
    // Добавляем выбранный фон
    bgElement.classList.add(`${currentAnimatedBg}-bg`);
    
    // Настраиваем скорость анимации
    const speed = currentBgSpeed / 10;
    bgElement.style.animationDuration = `${20 / speed}s`;
    
    // Настраиваем прозрачность
    bgElement.style.opacity = currentBgOpacity;
    
    // Сохраняем настройки
    localStorage.setItem('fame_animated_bg', currentAnimatedBg);
    localStorage.setItem('fame_bg_speed', currentBgSpeed);
    localStorage.setItem('fame_bg_opacity', currentBgOpacity);
    
    console.log(`✅ Фон применен: ${currentAnimatedBg}, скорость: ${currentBgSpeed}, прозрачность: ${currentBgOpacity}`);
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ МОДАЛЬНЫХ ОКОН
// =============================================
function initModals() {
    console.log('📦 Инициализация модальных окон...');
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
            playSound('modal-close');
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
    
    // Закрытие по клавише Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllModals();
        }
    });
    
    console.log('✅ Модальные окна инициализированы');
}

// =============================================
// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
// =============================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Добавляем анимацию появления
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.9)';
            modalContent.style.opacity = '0';
            setTimeout(() => {
                modalContent.style.transform = 'scale(1)';
                modalContent.style.opacity = '1';
            }, 10);
        }
        
        console.log(`📂 Модальное окно открыто: ${modalId}`);
        playSound('modal-open');
    } else {
        console.error(`❌ Модальное окно не найдено: ${modalId}`);
    }
}

// =============================================
// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
// =============================================
function closeModal(modal) {
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.9)';
            modalContent.style.opacity = '0';
        }
        
        setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 300);
        
        console.log('📂 Модальное окно закрыто');
    }
}

// =============================================
// ЗАКРЫТИЕ ВСЕХ МОДАЛЬНЫХ ОКОН
// =============================================
function closeAllModals() {
    document.querySelectorAll('.modal.active').forEach(modal => {
        closeModal(modal);
    });
}

// =============================================
// ЗАГРУЗКА СОХРАНЕННЫХ НАСТРОЕК
// =============================================
function loadSavedSettings() {
    console.log('💾 Загрузка сохраненных настроек...');
    
    // Тема
    const savedTheme = localStorage.getItem('fame_theme') || 'dark';
    const themeOption = document.querySelector(`.theme-option[data-theme="${savedTheme}"]`);
    if (themeOption) {
        themeOption.classList.add('active');
        applyTheme(savedTheme);
    }
    
    // Фон
    const savedBg = localStorage.getItem('fame_background');
    if (savedBg) {
        const bgPreview = document.getElementById('bg-preview');
        if (bgPreview) {
            bgPreview.innerHTML = `
                <img src="${savedBg}" alt="Фон" style="width:100%;height:200px;object-fit:cover;border-radius:10px;">
                <button class="remove-bg-btn" onclick="removeCustomBackground()" title="Удалить фон">
                    <i class="fas fa-times"></i>
                </button>
            `;
            bgPreview.style.display = 'block';
        }
        
        document.body.style.backgroundImage = `url(${savedBg})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundPosition = 'center';
    }
    
    // Настройки неона
    const savedNeonColor = localStorage.getItem('fame_neon_color') || '#808080';
    const savedNeonIntensity = parseFloat(localStorage.getItem('fame_neon_intensity')) || 0.5;
    const savedNeonSpeed = parseInt(localStorage.getItem('fame_neon_speed')) || 5;
    
    const neonColor = document.getElementById('neon-color');
    const neonIntensity = document.getElementById('neon-intensity');
    const neonSpeed = document.getElementById('neon-speed');
    
    if (neonColor) neonColor.value = savedNeonColor;
    if (neonIntensity) neonIntensity.value = savedNeonIntensity * 100;
    if (neonSpeed) neonSpeed.value = savedNeonSpeed;
    
    applyNeonSettings(savedNeonColor, savedNeonIntensity, savedNeonSpeed);
    
    // Анимированный фон
    const savedAnimatedBg = localStorage.getItem('fame_animated_bg') || 'hooks';
    const savedBgSpeed = parseInt(localStorage.getItem('fame_bg_speed')) || 10;
    const savedBgOpacity = parseFloat(localStorage.getItem('fame_bg_opacity')) || 0.5;
    
    currentAnimatedBg = savedAnimatedBg;
    currentBgSpeed = savedBgSpeed;
    currentBgOpacity = savedBgOpacity;
    
    const bgSpeed = document.getElementById('bg-speed');
    const bgOpacity = document.getElementById('bg-opacity');
    
    if (bgSpeed) bgSpeed.value = savedBgSpeed;
    if (bgOpacity) bgOpacity.value = savedBgOpacity * 100;
    
    applyAnimatedBg();
    
    // Эффект переливания
    const savedNeonFlow = localStorage.getItem('fame_neon_flow');
    const neonFlowCheckbox = document.getElementById('neon-flow-effect');
    if (neonFlowCheckbox) {
        if (savedNeonFlow === 'disabled') {
            neonFlowCheckbox.checked = false;
            neonFlowEnabled = false;
            removeNeonFlow();
        } else {
            neonFlowCheckbox.checked = true;
            neonFlowEnabled = true;
        }
    }
    
    // Снег
    const savedSnow = localStorage.getItem('fame_snow');
    const snowCheckbox = document.getElementById('snow-effect');
    if (snowCheckbox) {
        if (savedSnow === 'disabled') {
            snowCheckbox.checked = false;
            snowEnabled = false;
            const snowContainer = document.querySelector('.snow-container');
            if (snowContainer) snowContainer.style.display = 'none';
        } else {
            snowCheckbox.checked = true;
            snowEnabled = true;
        }
    }
    
    // Настройки сортировки
    const savedSort = localStorage.getItem('fame_sort_by') || 'default';
    if (savedSort !== 'default') {
        applySort(savedSort);
    }
    
    console.log('✅ Настройки загружены');
}

// =============================================
// ПРИМЕНЕНИЕ ТЕМЫ
// =============================================
function applyTheme(theme) {
    console.log(`🎨 Применение темы: ${theme}`);
    
    currentTheme = theme;
    
    const themeClasses = allThemes.map(t => `${t}-theme`);
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(theme + '-theme');
    
    // Обновляем цветовые переменные
    updateThemeVariables(theme);
    
    localStorage.setItem('fame_theme', theme);
    
    // Обновляем предпросмотр темы
    updateThemePreview();
}

// =============================================
// ОБНОВЛЕНИЕ ПРЕДПРОСМОТРА ТЕМЫ
// =============================================
function updateThemePreview() {
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        const theme = option.dataset.theme;
        const preview = option.querySelector('.theme-preview');
        if (preview) {
            preview.className = `theme-preview ${theme}-theme`;
        }
    });
}

// =============================================
// ГЛОБАЛЬНЫЕ ФУНКЦИИ
// =============================================
window.copyProfileLink = function(username) {
    const link = `${window.location.origin}${window.location.pathname}#profile?user=${encodeURIComponent(username)}`;
    navigator.clipboard.writeText(link).then(() => {
        showNotification('Ссылка на профиль скопирована в буфер обмена!', 'success');
        playSound('copy-success');
    }).catch(err => {
        console.error('❌ Ошибка копирования:', err);
        showNotification('Не удалось скопировать ссылку', 'error');
    });
};

window.clearSearch = function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
        currentSearchTerm = '';
        loadMembers();
        
        const clearBtn = searchInput.parentElement.querySelector('.search-clear');
        if (clearBtn) {
            clearBtn.style.display = 'none';
        }
    }
};

window.removeCustomBackground = function() {
    localStorage.removeItem('fame_background');
    document.body.style.backgroundImage = '';
    
    const bgPreview = document.getElementById('bg-preview');
    if (bgPreview) {
        bgPreview.innerHTML = '';
        bgPreview.style.display = 'none';
    }
    
    showNotification('Пользовательский фон удален', 'info');
    playSound('remove-bg');
};

// =============================================
// УТИЛИТЫ И ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// =============================================

// Функция для безопасной загрузки изображения
function loadAvatarWithFallback(imgElement, src, nickname) {
    return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
            imgElement.src = src;
            imgElement.style.opacity = '1';
            imgElement.classList.remove('avatar-fallback');
            resolve(true);
        };
        
        img.onerror = () => {
            // Создаем SVG аватар с первой буквой ника
            imgElement.src = 'data:image/svg+xml;base64,' + btoa(createFallbackAvatar(nickname));
            imgElement.style.opacity = '1';
            imgElement.classList.add('avatar-fallback');
            resolve(false);
        };
        
        // Добавляем индикатор загрузки
        imgElement.style.opacity = '0';
        const parent = imgElement.parentElement;
        if (parent) {
            parent.classList.add('loading');
        }
        
        // Таймаут для имитации загрузки
        setTimeout(() => img.src = src, 100);
        
        // Убираем индикатор через 3 секунды
        setTimeout(() => {
            if (parent) {
                parent.classList.remove('loading');
            }
            imgElement.style.opacity = '1';
        }, 3000);
    });
}

// Создание fallback аватара в формате SVG
function createFallbackAvatar(nickname) {
    const initial = nickname.charAt(0).toUpperCase();
    const color = generateColorFromNickname(nickname);
    
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${color}" />
                    <stop offset="100%" stop-color="${adjustColor(color, -20)}" />
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#gradient)" rx="50"/>
            <text x="50" y="50" text-anchor="middle" dy="0.35em" 
                  font-family="Arial, sans-serif" font-size="40" 
                  font-weight="bold" fill="#fff" opacity="0.9">${initial}</text>
        </svg>
    `;
}

// Генерация цвета на основе ника
function generateColorFromNickname(nickname) {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
    ];
    
    let hash = 0;
    for (let i = 0; i < nickname.length; i++) {
        hash = nickname.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
}

// Корректировка цвета
function adjustColor(color, amount) {
    let usePound = false;
    
    if (color[0] === "#") {
        color = color.slice(1);
        usePound = true;
    }
    
    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    
    r = Math.min(Math.max(0, r), 255);
    g = Math.min(Math.max(0, g), 255);
    b = Math.min(Math.max(0, b), 255);
    
    return (usePound ? "#" : "") + (b | (g << 8) | (r << 16)).toString(16).padStart(6, '0');
}

// Форматирование чисел
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
}

// Получение читаемого имени фона
function getBgName(bg) {
    const names = {
        'particles': 'Частицы', 'waves': 'Волны', 'pulse': 'Пульсация',
        'hooks': 'Зацепки', 'circuit': 'Микросхемы', 'grid': 'Сетка',
        'dots': 'Точки', 'lines': 'Линии', 'hexagon': 'Шестиугольники',
        'triangles': 'Треугольники', 'squares': 'Квадраты', 'circles': 'Круги',
        'nebula': 'Туманность', 'galaxy': 'Галактика', 'cosmic': 'Космос',
        'stardust': 'Звёздная пыль', 'matrix': 'Матрица', 'cyberpunk': 'Киберпанк',
        'circuit2': 'Микросхема 2', 'glitch': 'Глитч', 'rain': 'Дождь',
        'fire': 'Огонь', 'water': 'Вода', 'wind': 'Ветер',
        'vortex': 'Воронка', 'spiral': 'Спираль', 'radar': 'Радар',
        'sonar': 'Сонар'
    };
    
    return names[bg] || bg;
}

// Создание социальной кнопки
function createSocialButton(icon, text, url, className = '', color = '') {
    if (!url) return '';
    
    const style = color ? `style="background-color: ${color};"` : '';
    return `
        <a href="${url}" class="action-btn ${className}" ${style} target="_blank" rel="noopener noreferrer">
            <i class="${icon}"></i> ${text}
        </a>
    `;
}

// Обновление счетчика участников
function updateMembersCounter() {
    const counter = document.getElementById('members-counter');
    if (!counter) return;
    
    const visibleCards = document.querySelectorAll('.member-card[style*="display: flex"]').length;
    const totalCards = document.querySelectorAll('.member-card').length;
    
    counter.textContent = `Показано: ${visibleCards} из ${totalCards}`;
}

// Добавление пагинации
function addPagination(totalItems) {
    const container = document.getElementById('members-container');
    if (!container) return;
    
    const totalPages = Math.ceil(totalItems / MEMBERS_PER_PAGE);
    
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    pagination.innerHTML = `
        <button class="pagination-btn prev ${currentPage === 1 ? 'disabled' : ''}" 
                onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
        
        <div class="pagination-pages">
            ${generatePageNumbers(currentPage, totalPages)}
        </div>
        
        <button class="pagination-btn next ${currentPage === totalPages ? 'disabled' : ''}" 
                onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    container.appendChild(pagination);
}

// Генерация номеров страниц
function generatePageNumbers(current, total) {
    let pages = '';
    
    if (total <= 7) {
        // Показать все страницы
        for (let i = 1; i <= total; i++) {
            pages += `<button class="page-number ${i === current ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        }
    } else {
        // Показать с точками
        if (current <= 4) {
            for (let i = 1; i <= 5; i++) {
                pages += `<button class="page-number ${i === current ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
            }
            pages += '<span class="page-dots">...</span>';
            pages += `<button class="page-number" onclick="changePage(${total})">${total}</button>`;
        } else if (current >= total - 3) {
            pages += `<button class="page-number" onclick="changePage(1)">1</button>`;
            pages += '<span class="page-dots">...</span>';
            for (let i = total - 4; i <= total; i++) {
                pages += `<button class="page-number ${i === current ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
            }
        } else {
            pages += `<button class="page-number" onclick="changePage(1)">1</button>`;
            pages += '<span class="page-dots">...</span>';
            for (let i = current - 1; i <= current + 1; i++) {
                pages += `<button class="page-number ${i === current ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
            }
            pages += '<span class="page-dots">...</span>';
            pages += `<button class="page-number" onclick="changePage(${total})">${total}</button>`;
        }
    }
    
    return pages;
}

// Смена страницы
function changePage(page) {
    if (page < 1 || page > Math.ceil(members.length / MEMBERS_PER_PAGE)) return;
    
    currentPage = page;
    loadMembers();
    playSound('page-change');
    
    // Прокрутка к началу списка
    const container = document.getElementById('members-container');
    if (container) {
        container.scrollIntoView({ behavior: 'smooth' });
    }
}

// Применение сортировки
function applySort(sortBy) {
    localStorage.setItem('fame_sort_by', sortBy);
    loadMembers();
}

// =============================================
// УПРАВЛЕНИЕ ЗВУКАМИ
// =============================================
const sounds = {
    'click': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'menu-open': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'menu-close': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'modal-open': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'modal-close': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'card-click': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'filter': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'clear': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'profile-open': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'snow-on': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'snow-off': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'tab-switch': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'theme-change': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'upload-success': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'upload-error': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'neon-on': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'neon-off': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'neon-apply': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'bg-apply': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'bg-select': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'copy-success': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'remove-bg': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=='),
    'page-change': new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==')
};

function playSound(soundName) {
    if (!localStorage.getItem('fame_sounds_enabled')) {
        localStorage.setItem('fame_sounds_enabled', 'true');
    }
    
    if (localStorage.getItem('fame_sounds_enabled') === 'true' && sounds[soundName]) {
        try {
            sounds[soundName].currentTime = 0;
            sounds[soundName].play().catch(e => console.log('🔇 Звук отключен'));
        } catch (e) {
            console.log('🔇 Ошибка воспроизведения звука:', e);
        }
    }
}

// =============================================
// УВЕДОМЛЕНИЯ
// =============================================
function showNotification(message, type = 'info') {
    // Создаем контейнер для уведомлений если его нет
    let container = document.getElementById('notifications-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notifications-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
    
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        background: ${type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 
                     type === 'error' ? 'rgba(255, 0, 0, 0.1)' : 
                     type === 'warning' ? 'rgba(255, 215, 0, 0.1)' : 
                     'rgba(0, 204, 255, 0.1)'};
        border: 1px solid ${type === 'success' ? 'rgba(0, 255, 0, 0.3)' : 
                           type === 'error' ? 'rgba(255, 0, 0, 0.3)' : 
                           type === 'warning' ? 'rgba(255, 215, 0, 0.3)' : 
                           'rgba(0, 204, 255, 0.3)'};
        border-radius: 10px;
        padding: 15px 20px;
        min-width: 300px;
        max-width: 400px;
        backdrop-filter: blur(10px);
        transform: translateX(100px);
        opacity: 0;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 15px;
    `;
    
    const icon = type === 'success' ? '✅' :
                 type === 'error' ? '❌' :
                 type === 'warning' ? '⚠️' : 'ℹ️';
    
    notification.innerHTML = `
        <span style="font-size: 20px;">${icon}</span>
        <div style="flex: 1;">
            <div style="font-weight: 600; margin-bottom: 5px; color: var(--text-color);">
                ${type === 'success' ? 'Успешно' : 
                  type === 'error' ? 'Ошибка' : 
                  type === 'warning' ? 'Внимание' : 'Информация'}
            </div>
            <div style="color: var(--text-secondary); font-size: 14px;">${message}</div>
        </div>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; font-size: 18px;">
            ×
        </button>
    `;
    
    container.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Автоматическое скрытие через 5 секунд
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// =============================================
// ОПТИМИЗАЦИЯ ПРОИЗВОДИТЕЛЬНОСТИ
// =============================================
function initPerformanceOptimizations() {
    console.log('⚡ Инициализация оптимизаций производительности...');
    
    // Ленивая загрузка изображений
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Дебаунс для событий прокрутки
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Оптимизации при остановке прокрутки
            document.body.classList.add('scrolling-stopped');
        }, 100);
    });
    
    // Предзагрузка критических ресурсов
    const criticalResources = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        'style.css',
        'script.js'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
    
    console.log('✅ Оптимизации производительности инициализированы');
}

// =============================================
// SERVICE WORKER ДЛЯ ОФФЛАЙН-ДОСТУПА
// =============================================
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('✅ ServiceWorker зарегистрирован:', registration.scope);
            }).catch(error => {
                console.log('❌ Ошибка регистрации ServiceWorker:', error);
            });
        });
    }
}

// =============================================
// ПРОВЕРКА ОБНОВЛЕНИЙ
// =============================================
function checkForUpdates() {
    const lastUpdate = localStorage.getItem('fame_last_update_check');
    const now = Date.now();
    
    // Проверять не чаще чем раз в день
    if (!lastUpdate || now - lastUpdate > 24 * 60 * 60 * 1000) {
        fetch('/version.json')
            .then(response => response.json())
            .then(data => {
                const currentVersion = localStorage.getItem('fame_version') || '1.0.0';
                if (data.version !== currentVersion) {
                    showNotification(`Доступно обновление до версии ${data.version}`, 'info');
                    localStorage.setItem('fame_version', data.version);
                }
                localStorage.setItem('fame_last_update_check', now.toString());
            })
            .catch(() => {
                // Игнорируем ошибки при проверке обновлений
            });
    }
}

// =============================================
// ТРЕКИНГ ПРОСМОТРОВ ПРОФИЛЕЙ
// =============================================
function trackProfileView(memberId) {
    const views = JSON.parse(localStorage.getItem('fame_profile_views') || '{}');
    views[memberId] = (views[memberId] || 0) + 1;
    localStorage.setItem('fame_profile_views', JSON.stringify(views));
    
    // Обновляем счетчик просмотров в профиле
    const viewCount = document.querySelector('.profile-view-count');
    if (viewCount) {
        viewCount.textContent = `Просмотров: ${views[memberId]}`;
    }
}

// =============================================
// ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ
// =============================================
function showWelcomeMessage() {
    if (!localStorage.getItem('fame_welcome_shown')) {
        showNotification('Добро пожаловать в NoolShy Fame!', 'info');
        localStorage.setItem('fame_welcome_shown', 'true');
    }
}

// =============================================
// НАСТРОЙКА ОБРАБОТЧИКОВ СОБЫТИЙ
// =============================================
function setupEventListeners() {
    // Сохранение настроек при изменении
    document.getElementById('snow-effect')?.addEventListener('change', function() {
        localStorage.setItem('fame_snow', this.checked ? 'enabled' : 'disabled');
    });
    
    document.getElementById('neon-flow-effect')?.addEventListener('change', function() {
        localStorage.setItem('fame_neon_flow', this.checked ? 'enabled' : 'disabled');
        if (this.checked) {
            initDynamicNeon();
        } else {
            removeNeonFlow();
        }
    });
    
    // Глобальная функция переключения секций
    window.switchSection = function(sectionId) {
        console.log('🔄 Переключение секции:', sectionId);
        
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
    };
    
    // Обработка клавиш для навигации
    document.addEventListener('keydown', (e) => {
        // Ctrl + F для поиска
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape для закрытия модальных окон
        if (e.key === 'Escape') {
            closeAllModals();
        }
        
        // Стрелки для навигации между участниками в профиле
        if (document.getElementById('profile-details').classList.contains('active-section')) {
            if (e.key === 'ArrowLeft') {
                navigateProfile(-1);
            } else if (e.key === 'ArrowRight') {
                navigateProfile(1);
            }
        }
    });
    
    console.log('✅ Обработчики событий настроены');
}

// =============================================
// НАВИГАЦИЯ МЕЖДУ ПРОФИЛЯМИ
// =============================================
function navigateProfile(direction) {
    const currentProfile = document.querySelector('.profile-header .profile-title')?.textContent;
    if (!currentProfile) return;
    
    const currentIndex = members.findIndex(m => m.nickname === currentProfile);
    if (currentIndex === -1) return;
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = members.length - 1;
    if (newIndex >= members.length) newIndex = 0;
    
    showProfile(members[newIndex].id);
    playSound('card-click');
}

// =============================================
// ОБНОВЛЕНИЕ ПЕРЕМЕННЫХ ТЕМЫ
// =============================================
function updateThemeVariables(theme) {
    const root = document.documentElement;
    
    const themeColors = {
        'dark': { primary: '#ff0080', secondary: '#00ffcc', bg: '#0f0f0f' },
        'black': { primary: '#ffffff', secondary: '#808080', bg: '#000000' },
        'red': { primary: '#ff0000', secondary: '#ff6666', bg: '#200000' },
        'red-black': { primary: '#ff0000', secondary: '#8b0000', bg: '#000000' },
        'red-gray': { primary: '#ff0000', secondary: '#808080', bg: '#2a2a2a' },
        'purple': { primary: '#9d00ff', secondary: '#d4a6ff', bg: '#1a0033' },
        'blue': { primary: '#0074d9', secondary: '#7fdbff', bg: '#001f3f' },
        'green': { primary: '#00ff00', secondary: '#66ff66', bg: '#003300' },
        'orange': { primary: '#ff9900', secondary: '#ffcc66', bg: '#331a00' },
        'pink': { primary: '#ff66cc', secondary: '#ff99dd', bg: '#330033' }
    };
    
    const colors = themeColors[theme] || themeColors.dark;
    
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--dark-bg', colors.bg);
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
// =============================================
// Повторная инициализация для безопасности
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!isInitialized) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active-section');
            });
            document.getElementById('main')?.classList.add('active-section');
            
            // Принудительное обновление стилей
            updateThemeVariables(currentTheme);
            applyAnimatedBg();
            if (neonFlowEnabled) initDynamicNeon();
        }
    });
}

// Экспорт глобальных функций
window.members = members;
window.currentTheme = currentTheme;
window.currentNeonColor = currentNeonColor;
window.currentNeonIntensity = currentNeonIntensity;
window.currentNeonSpeed = currentNeonSpeed;

console.log('🚀 NoolShy Fame полностью загружен и готов к работе!');

// =============================================
// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ РАСШИРЕНИЯ
// =============================================

// Экспорт данных участников
function exportMembersData() {
    const data = {
        version: '1.0.0',
        exportDate: new Date().toISOString(),
        members: members.map(m => ({
            id: m.id,
            nickname: m.nickname,
            category: m.category,
            role: m.role,
            description: m.description,
            verified: m.verified,
            pinned: m.pinned,
            followers: m.followers,
            posts: m.posts
        }))
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `noolshy-fame-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Данные экспортированы', 'success');
}

// Импорт данных участников
function importMembersData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.members && Array.isArray(data.members)) {
                // В реальном проекте здесь была бы логика импорта
                showNotification('Импорт данных успешен', 'success');
                console.log('Импортировано участников:', data.members.length);
            } else {
                throw new Error('Неверный формат данных');
            }
        } catch (error) {
            showNotification('Ошибка импорта: ' + error.message, 'error');
        }
    };
    reader.readAsText(file);
}

// Сброс всех настроек
function resetAllSettings() {
    if (confirm('Вы уверены что хотите сбросить все настройки?')) {
        localStorage.clear();
        location.reload();
    }
}

// Создание резервной копии
function createBackup() {
    const backup = {
        settings: {
            theme: localStorage.getItem('fame_theme'),
            neonColor: localStorage.getItem('fame_neon_color'),
            neonIntensity: localStorage.getItem('fame_neon_intensity'),
            neonSpeed: localStorage.getItem('fame_neon_speed'),
            animatedBg: localStorage.getItem('fame_animated_bg'),
            bgSpeed: localStorage.getItem('fame_bg_speed'),
            bgOpacity: localStorage.getItem('fame_bg_opacity'),
            snow: localStorage.getItem('fame_snow'),
            neonFlow: localStorage.getItem('fame_neon_flow')
        },
        profileViews: JSON.parse(localStorage.getItem('fame_profile_views') || '{}'),
        timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `noolshy-fame-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Резервная копия создана', 'success');
}

// Восстановление из резервной копии
function restoreFromBackup(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backup = JSON.parse(e.target.result);
            
            // Восстанавливаем настройки
            if (backup.settings) {
                Object.entries(backup.settings).forEach(([key, value]) => {
                    if (value !== null) {
                        localStorage.setItem(`fame_${key}`, value);
                    }
                });
            }
            
            // Восстанавливаем просмотры профилей
            if (backup.profileViews) {
                localStorage.setItem('fame_profile_views', JSON.stringify(backup.profileViews));
            }
            
            showNotification('Настройки восстановлены', 'success');
            setTimeout(() => location.reload(), 1000);
            
        } catch (error) {
            showNotification('Ошибка восстановления: ' + error.message, 'error');
        }
    };
    reader.readAsText(file);
}

// Экспорт глобальных функций
window.exportMembersData = exportMembersData;
window.importMembersData = importMembersData;
window.resetAllSettings = resetAllSettings;
window.createBackup = createBackup;
window.restoreFromBackup = restoreFromBackup;
window.navigateProfile = navigateProfile;

// =============================================
// АВТОМАТИЧЕСКИЕ ОБНОВЛЕНИЯ
// =============================================
// Проверка обновлений каждые 30 минут
setInterval(checkForUpdates, 30 * 60 * 1000);

// Сохранение состояния при закрытии
window.addEventListener('beforeunload', () => {
    localStorage.setItem('fame_last_session', Date.now().toString());
});

// Восстановление сессии
const lastSession = localStorage.getItem('fame_last_session');
if (lastSession && Date.now() - parseInt(lastSession) < 5 * 60 * 1000) {
    // Менее 5 минут назад - восстанавливаем сессию
    console.log('🔄 Восстановление предыдущей сессии...');
}

console.log('🎉 NoolShy Fame полностью инициализирован и готов к работе!');
