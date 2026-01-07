// ДАННЫЕ УЧАСТНИКОВ - 28 УЧАСТНИКОВ
const members = [
    {
        id: 1,
        nickname: "шафо",
        username: "@nothevo",
        category: "Владелец",
        role: "Владелец",
        description: "Владелец этого фейм листа. Вход 50 зв, галочка 30зв, закреп 50зв.",
        avatar: "img/avatar1.png",
        verified: true,
        pinned: true,
        project: "https://t.me/+UO-WJgp_j65iYjA6",
        telegram: "nothevo",
        chat: "https://t.me/+I8WOJDuVRIdjNGUy",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        posts: 1000,
        followers: 1500,
        priceEntry: "50 зв",
        priceVerified: "30 зв",
        pricePinned: "50 зв",
        details: "Создатель и владелец Fame TG. Занимаюсь развитием сообщества и модерацией. Отвечаю на вопросы по поводу добавления в список и других услуг.",
        skills: ["Администрирование", "Модерация", "Развитие сообщества"],
        socials: {
            telegram: "@nothevo",
            project: "t.me/+UO-WJgp_j65iYjA6",
            chat: "t.me/+I8WOJDuVRIdjNGUy"
        }
    },
    {
        id: 2,
        nickname: "сверк",
        username: "@vsrns",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "Имею совместный проект вместе с шафо. Есть в различных кланах, чатах и сильных составах. В КМ с: 2022",
        avatar: "img/avatar2.png",
        verified: true,
        pinned: true,
        project: "https://t.me/+UO-WJgp_j65iYjA6",
        telegram: "vsrns",
        chat: "https://t.me/+G8aGt_GozxdhYjMy",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        posts: null,
        followers: null,
        priceList: "https://t.me/pricevrnsr",
        work: "https://t.me/workvrnsv",
        tiktok: "https://www.tiktok.com/@.vsrns?_r=1&_t=ZM-91yCsJt6j0a",
        forum: "https://t.me/privatvsrns",
        details: null,
        skills: []
    },
    {
        id: 3,
        nickname: "avoid",
        username: "@dognivanie",
        category: "Медийки",
        role: "Медийка",
        description: "крутая личность пиздит всех на виду, личность появилась с вк 2019 года в госпартии, кто полезет обоссыт нахуй | номерок +888 0626 2834",
        avatar: "img/avatar3.png",
        verified: true,
        pinned: false,
        project: "https://t.me/rentforavoid",
        telegram: "dognivanie",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 4,
        nickname: "wейзов",
        username: "@durov186",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "🏴‍☠️ blog - https://t.me/+IHya0C6SfUphMjgy /💆rep - https://t.me/reparevo",
        avatar: "img/avatar4.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+IHya0C6SfUphMjgy",
        telegram: "durov186",
        chat: "https://t.me/+u0RBtOtTX0I2ZWIy",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        reputation: "https://t.me/reparevo",
        details: null,
        skills: []
    },
    {
        id: 5,
        nickname: "Илюша Психопатов",
        username: "@ownerTwilight",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "был в вк км 2017-2020 с другой лики",
        avatar: "img/avatar5.png",
        verified: true,
        pinned: false,
        project: "https://t.me/+EZAC_H4VeIU5OWY1",
        telegram: "ownerTwilight",
        chat: "https://t.me/+PCSL9n5EWTcyYWQ1",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 6,
        nickname: "Ористонов",
        username: "@Oristonov",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "Чапаев бомже троль, Калашников сосал мне, тихо бомж,Николай сосал мне за деф,снял цепи сватает мирных и сосет тролям",
        avatar: "img/avatar6.png",
        verified: false,
        pinned: false,
        project: "https://t.me/oristonovtgk",
        telegram: "Oristonov",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 7,
        nickname: "francisco",
        username: "@pvpfrancisco",
        category: "Медийки",
        role: "Медийка",
        description: "с 2018 года состояла в комьюнити ВКонтакте, в стаке у рейзовых, в 2024 перешла в телеграм, первой моей ликой была хитрова, а дальше уже начали появляться другие лики как мира маньяк, антифобова, и тд, и начала постепенно набирать фейм, сейчас меня считают средним феймовым человеком",
        avatar: "img/avatar7.png",
        verified: true,
        pinned: false,
        project: "https://t.me/+bYvDH5887YFhNDEy",
        telegram: "pvpfrancisco",
        chat: "https://t.me/+4mu1omgIW9AwZmFi",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 8,
        nickname: "верховный младший",
        username: "@r1bog",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "в км с 22 года",
        avatar: "img/avatar8.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+2eQ3tkjjC_M3ZTJi",
        telegram: "r1bog",
        chat: "https://t.me/+-fuOlPIwWfQ2OWQx",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 9,
        nickname: "Хизеров",
        username: "@oexvh",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "да я сделал много грязи, я не чувствую лица👍. малой я сделал, себя я покланяюсь небесам🌫.",
        avatar: "img/avatar9.png",
        verified: false,
        pinned: false,
        project: "https://t.me/dr3inL",
        telegram: "oexvh",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        priceList: "http://t.me/pricehizerov",
        reputation: "https://t.me/repahizerov",
        details: null,
        skills: []
    },
    {
        id: 10,
        nickname: "дронтеров",
        username: "@cointelegramstars",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "я легенда а у вас мама гей Батя шлюха",
        avatar: "img/avatar10.png",
        verified: false,
        pinned: false,
        project: "https://t.me/bcmalom",
        telegram: "cointelegramstars",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 11,
        nickname: "T1emahkaa",
        username: "@ARESTOVAN_POLICIE1",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "Повелитель комьюнити",
        avatar: "img/avatar11.png",
        verified: false,
        pinned: false,
        project: "https://t.me/messilkaa",
        telegram: "ARESTOVAN_POLICIE1",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 12,
        nickname: "Смертный",
        username: "@Garant_nafka",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "Топ гарант (от владельца - я бы не доверился профиль пустой)",
        avatar: "img/avatar12.png",
        verified: false,
        pinned: false,
        project: "https://t.me/smertni_live",
        telegram: "Garant_nafka",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 13,
        nickname: "Краплов",
        username: "@kraplov",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "🏴‍☠️ CEO — @swatskids. Твинков не имею!",
        avatar: "img/avatar13.png",
        verified: true,
        pinned: false,
        project: "https://t.me/+5HTCiQrXtOY3Mjhk",
        telegram: "kraplov",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        tiktok: "https://www.tiktok.com/@kibersnos?_r=1&_t=ZM-92lbGRuTGs0",
        details: null,
        skills: []
    },
    {
        id: 14,
        nickname: "Lienor",
        username: "@Lienor_r",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "В км с начала 2024 года валиднул из известных личностей таких как defalov",
        avatar: "img/avatar14.png",
        verified: false,
        pinned: false,
        project: null,
        telegram: "Lienor_r",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 15,
        nickname: "Saturn",
        username: "@Affsaturn",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "https://affsaturn.rf.gd вся информация тут",
        avatar: "img/avatar15.png",
        verified: false,
        pinned: false,
        project: null,
        telegram: "Affsaturn",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        website: "https://affsaturn.rf.gd",
        details: null,
        skills: []
    },
    {
        id: 16,
        nickname: "тихий шепот",
        username: "@vrnqs_official",
        category: "Высокий фейм",
        role: "Высокий фейм",
        description: "",
        avatar: "img/avatar16.png",
        verified: false,
        pinned: false,
        project: "https://t.me/blogshepot",
        telegram: "vrnqs_official",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        blog: "https://t.me/blogshepot",
        private: "https://t.me/+Co-gH9wvJT0yODUy",
        reputation: "https://t.me/ortzwvrn",
        priceList: "https://t.me/+TzoIuZQbi945NDgy",
        details: null,
        skills: []
    },
    {
        id: 17,
        nickname: "zup",
        username: "@zupnetov",
        category: "Высокий фейм",
        role: "Высокий фейм",
        description: "В КМ с конца 2019 года. Актуален как Листопадов.",
        avatar: "img/avatar17.png",
        verified: true,
        pinned: false,
        project: "https://t.me/+5QB0M2tY3XxjMGM6",
        telegram: "zupnetov",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 18,
        nickname: "апати",
        username: "@apathydll",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "в комьюнити с: 2025",
        avatar: "img/avatar18.png",
        verified: false,
        pinned: false,
        project: null,
        telegram: "apathydll",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 19,
        nickname: "Zwezdochetow",
        username: "@Zwezdochetow",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "Фейм Листа с 2022 года. в км с: 2022",
        avatar: "img/avatar19.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+hvM0Ph9KsyVmZmQy",
        telegram: "Zwezdochetow",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 20,
        nickname: "akronimow",
        username: "@ipfisher",
        category: "Медийки",
        role: "Медийка",
        description: "Владелец SwagaBitches. в КМ с: 2020",
        avatar: "img/avatar20.png",
        verified: true,
        pinned: true,
        project: "https://t.me/+2eQ3tkjjC_M3ZTJi",
        telegram: "ipfisher",
        chat: "https://t.me/+-fuOlPIwWfQ2OWQx",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 21,
        nickname: "Химик",
        username: "@ximiath",
        category: "Высокий фейм",
        role: "Высокий фейм",
        description: "",
        avatar: "img/avatar21.png",
        verified: true,
        pinned: false,
        project: "https://t.me/+VFlTx32RHEBmZDVk",
        telegram: "ximiath",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        whitelist: "https://t.me/whiiteliist",
        details: null,
        skills: []
    },
    {
        id: 22,
        nickname: "ksitamin maniac",
        username: "@attackksitami",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "Владелец domksitami.",
        avatar: "img/avatar22.png",
        verified: false,
        pinned: false,
        project: "https://t.me/domksitami",
        telegram: "attackksitami",
        chat: "https://t.me/Chats_ksitami",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        def: "https://t.me/freedef_ksitami",
        reputation: "https://t.me/repaksitamis",
        work: "https://t.me/+yP4psP3lJjY2MjIy",
        details: null,
        skills: []
    },
    {
        id: 23,
        nickname: "Шафо младший",
        username: "@attakshafo",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "сын шафо",
        avatar: "img/avatar23.png",
        verified: true,
        pinned: false,
        project: "https://t.me/+xm9o_NoMxjVjNjgy",
        telegram: "attakshafo",
        chat: "https://t.me/Chats_ksitami",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 24,
        nickname: "просто принц",
        username: "@freakrip",
        category: "Малый фейм",
        role: "Малый фейм",
        description: "в км с 2022",
        avatar: "img/avatar24.png",
        verified: false,
        pinned: false,
        project: null,
        telegram: "freakrip",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 25,
        nickname: "мадов",
        username: "@obpeza",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "в км с 2024",
        avatar: "img/avatar25.png",
        verified: false,
        pinned: false,
        project: null,
        telegram: "obpeza",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 26,
        nickname: "haetripov",
        username: "@haetripov",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "Создатель кровавый ворон",
        avatar: "img/avatar26.png",
        verified: true,
        pinned: false,
        project: "https://t.me/+e6YzF5gT7gRkNmVi",
        telegram: "haetripov",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        reputation: "https://t.me/rephaetripov",
        priceList: "https://t.me/+JWYh43B4Rzw5Yzdl",
        details: null,
        skills: []
    },
    {
        id: 27,
        nickname: "пиратский сеня",
        username: "@swatoan",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "Владелец пиратский сеня и киберприсма. в км с 2022",
        avatar: "img/avatar27.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+WKBMyH1IIfxjMTNi",
        telegram: "swatoan",
        chat: "https://t.me/+WKBMyH1IIfxjMTNi",
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    },
    {
        id: 28,
        nickname: "партизан",
        username: "@ocyrn",
        category: "Средний фейм",
        role: "Средний фейм",
        description: "Владелец Социализация и Черный след. в км с 2024",
        avatar: "img/avatar28.png",
        verified: false,
        pinned: false,
        project: "https://t.me/+jg_465t9-yJlODE0",
        telegram: "ocyrn",
        chat: null,
        joinDate: "2026-01-04",
        activity: "Постоянная",
        details: null,
        skills: []
    }
];

// Массив всех фонов
const allBackgrounds = [
    'particles', 'waves', 'pulse', 'hooks', 'circuit',
    'grid', 'dots', 'lines', 'hexagon', 'triangles',
    'squares', 'circles', 'nebula', 'galaxy', 'cosmic',
    'stardust', 'matrix', 'cyberpunk', 'circuit2', 'glitch',
    'rain', 'fire', 'water', 'wind', 'vortex',
    'spiral', 'radar', 'sonar'
];

// Текущие настройки
let currentTheme = 'dark';
let currentNeonColor = '#808080';
let currentNeonIntensity = 0.5;
let currentNeonSpeed = 5;
let currentAnimatedBg = 'hooks';
let currentBgSpeed = 10;
let currentBgOpacity = 0.5;

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMembers();
    initSnow();
    initSettings();
    initNeonControls();
    initAnimatedBg();
    initModals();
    loadSavedSettings();
    initDynamicNeon();
    initAllAvatars();
    
    generateBgGrid();
});

// Генерация сетки фонов
function generateBgGrid() {
    const grid = document.querySelector('.animated-bg-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    allBackgrounds.forEach(bg => {
        const option = document.createElement('div');
        option.className = `animated-bg-option ${bg === currentAnimatedBg ? 'active' : ''}`;
        option.dataset.bg = bg;
        
        option.innerHTML = `
            <div class="bg-preview ${bg}-bg"></div>
            <span>${getBgName(bg)}</span>
        `;
        
        option.addEventListener('click', function() {
            document.querySelectorAll('.animated-bg-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
            currentAnimatedBg = this.dataset.bg;
        });
        
        grid.appendChild(option);
    });
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

// Функция для безопасной загрузки изображения
function loadAvatarWithFallback(imgElement, src, nickname) {
    return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
            imgElement.src = src;
            imgElement.style.opacity = '1';
            resolve(true);
        };
        
        img.onerror = () => {
            // Создаем SVG аватар с первой буквой ника
            const initial = nickname.charAt(0).toUpperCase();
            const color = generateColorFromNickname(nickname);
            
            const svg = `
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="${color}" rx="50"/>
                    <text x="50" y="50" text-anchor="middle" dy="0.35em" 
                          font-family="Arial, sans-serif" font-size="40" 
                          font-weight="bold" fill="#fff">${initial}</text>
                </svg>
            `;
            
            imgElement.src = 'data:image/svg+xml;base64,' + btoa(svg);
            imgElement.style.opacity = '1';
            imgElement.classList.add('avatar-fallback');
            resolve(false);
        };
        
        // Добавляем индикатор загрузки
        imgElement.style.opacity = '0';
        if (imgElement.parentElement) {
            imgElement.parentElement.classList.add('loading');
        }
        
        setTimeout(() => img.src = src, 100);
        
        // Убираем индикатор через 2 секунды
        setTimeout(() => {
            if (imgElement.parentElement) {
                imgElement.parentElement.classList.remove('loading');
            }
            imgElement.style.opacity = '1';
        }, 2000);
    });
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

// Инициализация навигации
function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.add('active');
        });
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    }
    
    // Переключение секций
    const navTabs = document.querySelectorAll('.nav-tab');
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');
    
    function switchSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active-section');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
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
            tab.addEventListener('click', () => {
                switchSection(tab.dataset.section);
            });
        }
    });
    
    menuItems.forEach(item => {
        if (item.dataset.section) {
            item.addEventListener('click', () => {
                switchSection(item.dataset.section);
                sideMenu.classList.remove('active');
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
            sideMenu.classList.remove('active');
        });
    }
    
    if (animatedBgBtn) {
        animatedBgBtn.addEventListener('click', () => {
            openModal('animated-bg-modal');
        });
    }
    
    if (menuAnimatedBg) {
        menuAnimatedBg.addEventListener('click', () => {
            openModal('animated-bg-modal');
            sideMenu.classList.remove('active');
        });
    }
}

// Инициализация всех аватаров
function initAllAvatars() {
    // Предзагрузка первых нескольких аватаров
    const preloadAvatars = members.slice(0, 6).map(member => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = `img/avatar${member.id}.png`;
            img.onload = resolve;
            img.onerror = resolve;
        });
    });
    
    // Инициализируем карточки после небольшой задержки
    setTimeout(loadMembers, 100);
}

// Инициализация участников
function initMembers() {
    loadMembers();
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterMembers(category);
        });
    });
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            searchMembers(searchTerm);
        });
    }
}

// Загрузка участников
function loadMembers() {
    const container = document.getElementById('members-container');
    if (!container) return;
    
    container.innerHTML = '';
    
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
    
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.dataset.id;
            showProfile(memberId);
        });
    });
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
    
    // Создаем ID для аватара
    const avatarId = `avatar-${member.id}`;
    
    card.innerHTML = `
        <div class="member-avatar" data-initial="${member.nickname.charAt(0).toUpperCase()}">
            <img id="${avatarId}" 
                 src="" 
                 alt="${member.nickname}"
                 loading="lazy">
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
    
    // Загружаем аватар после создания элемента
    setTimeout(() => {
        const img = card.querySelector(`#${avatarId}`);
        const avatarPath = `img/avatar${member.id}.png`;
        loadAvatarWithFallback(img, avatarPath, member.nickname);
    }, 10);
    
    return card;
}

// Фильтрация участников
function filterMembers(category) {
    const cards = document.querySelectorAll('.member-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Поиск участников
function searchMembers(term) {
    const cards = document.querySelectorAll('.member-card');
    const activeFilter = document.querySelector('.filter-btn.active').dataset.category;
    
    cards.forEach(card => {
        const nickname = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.member-description').textContent.toLowerCase();
        
        const matchesSearch = nickname.includes(term) || description.includes(term);
        const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
        
        if (matchesSearch && matchesFilter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 10);
        } else {
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Дополнительные функции для отображения кнопок
function createSocialButton(icon, text, url, className = '') {
    if (!url) return '';
    return `
        <a href="${url}" class="action-btn ${className}" target="_blank">
            <i class="${icon}"></i> ${text}
        </a>
    `;
}

// ПОЛНЫЙ ПРОФИЛЬ УЧАСТНИКА
function showProfile(memberId) {
    const member = members.find(m => m.id == memberId);
    if (!member) return;
    
    const container = document.getElementById('profile-content');
    
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
    let mainButtons = createSocialButton('fab fa-telegram', 'Написать в ЛС', `https://t.me/${member.telegram}`, 'telegram');
    if (member.project) mainButtons += createSocialButton('fas fa-external-link-alt', 'Основной канал', member.project);
    if (member.chat) mainButtons += createSocialButton('fas fa-comments', 'Чат', member.chat, 'telegram');
    
    // Дополнительные кнопки
    let extraButtons = '';
    const extraLinks = {
        'tiktok': {icon: 'fab fa-tiktok', text: 'TikTok'},
        'website': {icon: 'fas fa-globe', text: 'Сайт'},
        'reputation': {icon: 'fas fa-star', text: 'Репутация'},
        'priceList': {icon: 'fas fa-tag', text: 'Прайс'},
        'work': {icon: 'fas fa-briefcase', text: 'Ворк'},
        'forum': {icon: 'fas fa-users', text: 'Форум'},
        'def': {icon: 'fas fa-shield-alt', text: 'Деф'},
        'whitelist': {icon: 'fas fa-list', text: 'White List'},
        'blog': {icon: 'fas fa-blog', text: 'Блог'},
        'private': {icon: 'fas fa-lock', text: 'Приват'}
    };
    
    Object.keys(extraLinks).forEach(key => {
        if (member[key]) {
            extraButtons += createSocialButton(extraLinks[key].icon, extraLinks[key].text, member[key]);
        }
    });
    
    // Статистика
    const stats = {
        'Статус': member.role,
        'Верификация': member.verified ? '✓ Подтверждён' : '✓ Не подтверждён',
        'Закреп': member.pinned ? '📌 Включён' : '📌 Выключен',
        'Дата регистрации': formattedDate,
        'Активность': member.activity,
        'Подписчики': member.followers,
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
    const profileAvatarId = `profile-avatar-${member.id}`;
    
    container.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar" data-initial="${member.nickname.charAt(0).toUpperCase()}">
                <img id="${profileAvatarId}" 
                     src="" 
                     alt="${member.nickname}"
                     loading="eager">
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
                ${statsHtml}
            </div>
        </div>
    `;
    
    // Загружаем аватар профиля
    setTimeout(() => {
        const img = document.getElementById(profileAvatarId);
        const avatarPath = `img/avatar${member.id}.png`;
        if (img) {
            loadAvatarWithFallback(img, avatarPath, member.nickname);
        }
    }, 10);
    
    switchSection('profile-details');
}

// Инициализация снега
function initSnow() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    createSnowflakes();
    
    const snowToggle = document.getElementById('snow-effect');
    if (snowToggle) {
        snowToggle.addEventListener('change', function() {
            if (this.checked) {
                snowContainer.style.display = 'block';
                createSnowflakes();
            } else {
                snowContainer.style.display = 'none';
                snowContainer.innerHTML = '';
            }
        });
    }
}

// Создание снежинок
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    snowContainer.innerHTML = '';
    
    for (let i = 0; i < 60; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const opacity = Math.random() * 0.5 + 0.3;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}vw`;
        snowflake.style.opacity = opacity;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        
        snowContainer.appendChild(snowflake);
    }
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
                    bgPreview.innerHTML = `<img src="${e.target.result}" alt="Фон">`;
                    bgPreview.style.display = 'block';
                    
                    localStorage.setItem('fame_background', e.target.result);
                    document.body.style.backgroundImage = `url(${e.target.result})`;
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundAttachment = 'fixed';
                    document.body.style.backgroundPosition = 'center';
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    const neonFlowEffect = document.getElementById('neon-flow-effect');
    if (neonFlowEffect) {
        neonFlowEffect.addEventListener('change', function() {
            if (this.checked) {
                initDynamicNeon();
            } else {
                removeNeonFlow();
            }
        });
    }
}

// Инициализация контролов неона
function initNeonControls() {
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
        });
        colorPreview.style.backgroundColor = neonColor.value;
    }
    
    if (neonIntensity && intensityValue) {
        neonIntensity.addEventListener('input', function() {
            intensityValue.textContent = this.value + '%';
        });
        intensityValue.textContent = neonIntensity.value + '%';
    }
    
    if (neonSpeed && speedValue) {
        const speedLabels = {
            1: 'Очень медленно',
            2: 'Медленно',
            3: 'Немного медленно',
            4: 'Ниже средней',
            5: 'Средняя',
            6: 'Выше средней',
            7: 'Быстро',
            8: 'Очень быстро',
            9: 'Супер быстро',
            10: 'Максимальная'
        };
        
        neonSpeed.addEventListener('input', function() {
            speedValue.textContent = speedLabels[this.value] || 'Средняя';
        });
        speedValue.textContent = speedLabels[neonSpeed.value] || 'Средняя';
    }
    
    if (applyNeonBtn) {
        applyNeonBtn.addEventListener('click', function() {
            const color = neonColor.value;
            const intensity = parseInt(neonIntensity.value) / 100;
            const speed = parseInt(neonSpeed.value);
            
            applyNeonSettings(color, intensity, speed);
        });
    }
}

// Применение настроек неона
function applyNeonSettings(color, intensity, speed) {
    currentNeonColor = color;
    currentNeonIntensity = intensity;
    currentNeonSpeed = speed;
    
    localStorage.setItem('fame_neon_color', color);
    localStorage.setItem('fame_neon_intensity', intensity);
    localStorage.setItem('fame_neon_speed', speed);
    
    initDynamicNeon();
}

// Динамический неон
function initDynamicNeon() {
    const oldStyle = document.getElementById('dynamic-neon-style');
    if (oldStyle) oldStyle.remove();
    
    const hex = currentNeonColor;
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    
    const duration = (11 - currentNeonSpeed) + 's';
    
    const style = document.createElement('style');
    style.id = 'dynamic-neon-style';
    
    style.textContent = `
        @keyframes neonFlow {
            0%, 100% { 
                box-shadow: 0 0 ${10 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.8 * currentNeonIntensity}),
                          0 0 ${20 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.6 * currentNeonIntensity}),
                          0 0 ${30 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.4 * currentNeonIntensity}),
                          inset 0 0 ${10 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.5 * currentNeonIntensity}); 
            }
            50% { 
                box-shadow: 0 0 ${15 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.9 * currentNeonIntensity}),
                          0 0 ${25 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.7 * currentNeonIntensity}),
                          0 0 ${35 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.5 * currentNeonIntensity}),
                          inset 0 0 ${15 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.6 * currentNeonIntensity}); 
            }
        }
        
        @keyframes textNeonFlow {
            0%, 100% { 
                text-shadow: 0 0 ${5 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.8 * currentNeonIntensity}),
                           0 0 ${10 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.6 * currentNeonIntensity}); 
            }
            50% { 
                text-shadow: 0 0 ${8 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.9 * currentNeonIntensity}),
                           0 0 ${15 * currentNeonIntensity}px rgba(${r}, ${g}, ${b}, ${0.7 * currentNeonIntensity}); 
            }
        }
        
        .neon-flow {
            animation: neonFlow ${duration} ease-in-out infinite !important;
        }
        
        .text-neon-flow {
            animation: textNeonFlow ${duration} ease-in-out infinite !important;
        }
    `;
    
    document.head.appendChild(style);
    
    const neonFlowEffect = document.getElementById('neon-flow-effect');
    if (neonFlowEffect && neonFlowEffect.checked) {
        applyNeonToElements();
    }
}

// Применение неона к элементам
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
    
    const profileHeader = document.querySelector('.profile-header');
    if (profileHeader) {
        profileHeader.classList.add('neon-flow');
    }
}

// Удаление эффекта переливания
function removeNeonFlow() {
    document.querySelectorAll('.neon-flow').forEach(el => {
        el.classList.remove('neon-flow');
    });
    document.querySelectorAll('.text-neon-flow').forEach(el => {
        el.classList.remove('text-neon-flow');
    });
}

// Инициализация анимированного фона
function initAnimatedBg() {
    const bgSpeed = document.getElementById('bg-speed');
    const bgOpacity = document.getElementById('bg-opacity');
    const applyBgBtn = document.getElementById('apply-animated-bg');
    
    if (bgSpeed) {
        bgSpeed.addEventListener('input', function() {
            currentBgSpeed = parseInt(this.value);
        });
    }
    
    if (bgOpacity) {
        bgOpacity.addEventListener('input', function() {
            currentBgOpacity = parseInt(this.value) / 100;
        });
    }
    
    if (applyBgBtn) {
        applyBgBtn.addEventListener('click', applyAnimatedBg);
    }
}

// Применение анимированного фона
function applyAnimatedBg() {
    const bgElement = document.getElementById('animated-bg');
    
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
}

// Инициализация модальных окон
function initModals() {
    const settingsBtns = document.querySelectorAll('#settings-btn, #menu-settings');
    
    settingsBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                openModal('settings-modal');
            });
        }
    });
    
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
}

// Открытие модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Закрытие модального окна
function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Загрузка сохраненных настроек
function loadSavedSettings() {
    // Тема
    const savedTheme = localStorage.getItem('fame_theme');
    if (savedTheme) {
        const themeOption = document.querySelector(`.theme-option[data-theme="${savedTheme}"]`);
        if (themeOption) {
            themeOption.click();
        }
    }
    
    // Фон
    const savedBg = localStorage.getItem('fame_background');
    if (savedBg) {
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
            removeNeonFlow();
        } else {
            neonFlowCheckbox.checked = true;
        }
    }
    
    // Снег
    const savedSnow = localStorage.getItem('fame_snow');
    const snowCheckbox = document.getElementById('snow-effect');
    if (snowCheckbox) {
        if (savedSnow === 'disabled') {
            snowCheckbox.checked = false;
            const snowContainer = document.querySelector('.snow-container');
            if (snowContainer) snowContainer.style.display = 'none';
        } else {
            snowCheckbox.checked = true;
        }
    }
}

// Применение темы
function applyTheme(theme) {
    currentTheme = theme;
    
    const themeClasses = ['dark-theme', 'black-theme', 'red-theme', 'red-black-theme', 
                         'red-gray-theme', 'purple-theme', 'blue-theme', 'green-theme', 
                         'orange-theme', 'pink-theme'];
    
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(theme + '-theme');
    
    localStorage.setItem('fame_theme', theme);
}

// Глобальные функции
window.copyProfileLink = function(username) {
    const link = `https://t.me/+UO-WJgp_j65iYjA6?text=Профиль%20${encodeURIComponent(username)}%20на%20Fame%20TG`;
    navigator.clipboard.writeText(link).then(() => {
        alert('Ссылка на профиль скопирована в буфер обмена!');
    });
};

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

// Функция переключения секций
function switchSection(sectionId) {
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