//  === БЛОК 1: СЛОВАРЬ ПЕРЕВОДОВ ===
const translations = {
    ru: {
        "about-title": "Обо мне",
        "about-text": "Привет! Я начинающий веб-разработчик. Учусь с января 2026 года.",
        "skills-title": "Мои навыки",
        "languages-title": "Языки:",
        "lang-ru": "Русский:",
        "lang-ru-desc": "Родной язык",
        "lang-tr": "Турецкий:",
        "lang-tr-desc": "Разговорный / Изучаю",
        "lang-en": "Английский:",
        "lang-en-desc": "Начальный / Изучаю",
        "projects-title": "Мои проекты",
        "proj-1-title": "Проект 1: Перейти в мой Блог ✍️",
        "proj-1-desc": "Создание блога с использованием HTML, CSS и JavaScript. (В процессе разработки, скоро появится)",
        "proj-2-title": "Проект 2: Вебинар",
        "proj-2-desc": "Форма регистрации на вебинар.",
        "proj-3-title": "Проект 3: Интернет-магазин",
        "proj-3-desc": "Разработка интернет-магазина с использованием Vue. (В процессе разработки, скоро появится)",
        "proj-4-title": "Проект 4: Портфолио",
        "proj-4-desc": "Создание страницы портфолио с использованием HTML и CSS.",
        "proj-5-title": "Проект 5: Кофейня «Sweet & Coffee»",
        "proj-5-desc": "Адаптивный сайт кофейни с меню, ценами и интерактивной формой быстрого заказа.",
        "proj-6-title": "Проект 6: Мой интерактивный To-Do List",
        "proj-6-desc": "Интерактивный список задач на чистом JavaScript.",
        "blog-welcome": "Добро пожаловать в мой блог! ✍️",
        "blog-subtitle": "Здесь я делюсь своими мыслями и успехами в IT.",
        "blog-back": "Назад на главную",
        "blog-add-title": "Добавить новую запись",
        "blog-placeholder-title": "Заголовок статьи",
        "blog-placeholder-text": "Текст вашей статьи...",
        "blog-publish-btn": "Опубликовать",
        "blog-all-posts": "Все записи",
        "blog-delete-btn": "Удалить"
    },
    en: {
        "about-title": "About me",
        "about-text": "Hello! I am a beginner web developer. I have been studying since January 2026.",
        "skills-title": "My skills",
        "languages-title": "Languages:",
        "lang-ru": "Russian:",
        "lang-ru-desc": "Native language",
        "lang-tr": "Turkish:",
        "lang-tr-desc": "Conversational / Learning",
        "lang-en": "English:",
        "lang-en-desc": "Beginner / Learning",
        "projects-title": "My projects",
        "proj-1-title": "Project 1: Go to my Blog ✍️",
        "proj-1-desc": "Creating a blog using HTML, CSS and JavaScript. (Under development, coming soon)",
        "proj-2-title": "Project 2: Webinar",
        "proj-2-desc": "Registration form for a webinar.",
        "proj-3-title": "Project 3: Online Store",
        "proj-3-desc": "Developing an online store using Vue. (Under development, coming soon)",
        "proj-4-title": "Project 4: Portfolio",
        "proj-4-desc": "Creating a portfolio page using HTML and CSS.",
        "proj-5-title": "Project 5: 'Sweet & Coffee' Coffee Shop",
        "proj-5-desc": "Responsive coffee shop website with menu, prices and interactive quick order form.",
        "proj-6-title": "Project 6: My Interactive To-Do List",
        "proj-desc": "An interactive to-do list with pure JavaScript.",
        "blog-welcome": "Welcome to my blog! ✍️",
        "blog-subtitle": "Here I share my thoughts and achievements in IT.",
        "blog-back": "Back to home",
        "blog-add-title": "Add a new post",
        "blog-placeholder-title": "Article title",
        "blog-placeholder-text": "Text of your article...",
        "blog-publish-btn": "Publish",
        "blog-all-posts": "All posts",
        "blog-delete-btn": "Delete"
    },
    tr: {
        "about-title": "Hakkımda",
        "about-text": "Merhaba! Ben yeni başlayan bir web geliştiricisiyim. Ocak 2026'dan beri çalışıyorum.",
        "skills-title": "Yeteneklerim",
        "languages-title": "Diller:",
        "lang-ru": "Rusça:",
        "lang-ru-desc": "Ana dil",
        "lang-tr": "Türkçe:",
        "lang-tr-desc": "Konuşma / Öğreniyorum",
        "lang-en": "İngilizce:",
        "lang-en-desc": "Başlangıç / Öğreniyorum",
        "projects-title": "Projelerim",
        "proj-1-title": "Proje 1: Bloguma Git ✍️",
        "proj-1-desc": "HTML, CSS ve JavaScript kullanarak bir blog oluşturma. (Yapım aşamasında, yakında gelecek)",
        "proj-2-title": "Proje 2: Web semineri",
        "proj-2-desc": "Bir web semineri için kayıt formu.",
        "proj-3-title": "Proje 3: Çevrimiçi Mağaza",
        "proj-3-desc": "Vue kullanarak bir çevrimiçi mağaza geliştirme. (Yapım aşamasında, yakında gelecek)",
        "proj-4-title": "Proje 4: Portfolyo",
        "proj-4-desc": "HTML ve CSS kullanarak bir portfolyo sayfası oluşturma.",
        "proj-5-title": "Proje 5: «Sweet & Coffee» Kafe",
        "proj-5-desc": "Menü, fiyatlar ve etkileşimli hızlı sipariş formu içeren duyarlı bir kahve dükkanı web sitesi.",
        "proj-6-title": "Proje 6: Interaktif To-Do listem",
        "proj-6-desc": "Saf JavaScript ile oluşturulmuş etkileşimli bir yapılacaklar listesi.",

        "blog-welcome": "Bloguma hoş geldiniz! ✍️",
        "blog-subtitle": "Burada IT alanındaki düşüncelerimi ve başarılarımı paylaşıyorum.",
        "blog-back": "Ana sayfaya geri dön",
        "blog-add-title": "Yeni bir yazı ekle",
        "blog-placeholder-title": "Makale başlığı",
        "blog-placeholder-text": "Makalenizin metni...",
        "blog-publish-btn": "Yayınla",
        "blog-all-posts": "Tüm kayıtlar",
        "blog-delete-btn": "Sil"
    }
};

// === БЛОК 2: ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА ===
window.changeLanguage = function(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
    
    localStorage.setItem('selected_language', lang);
}

// === БЛОК 3: КОД СОВЕТОВ И БЛОГА ===
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selected_language') || 'ru';
    window.changeLanguage(savedLang);

    // Кнопка советов
    const btn = document.getElementById('magicBtn');
    const message = document.getElementById('magicMessage');
    const tips = [
        "Пишите чистый код и не забывайте оставлять комментарии.",
        "Регулярно делайте коммиты в Git, разделяя задачи.",
        "Ошибки в консоли — это не провал, а инструмент поиска решений.",
        "Лучший способ закрепить теорию — сразу применить её на практике."
    ];

    if (btn && message) {
        btn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * tips.length);
            message.textContent = tips[randomIndex];
        });
    }

    // Блог с сохранением и удалением
    const blogForm = document.getElementById('blog-form');
    const titleInput = document.getElementById('post-title');
    const textInput = document.getElementById('post-text');
    const postsContainer = document.getElementById('posts-container');

    if (blogForm) {
        let savedPosts = JSON.parse(localStorage.getItem('myBlogPosts')) || [];

        function renderPost(title, text, index) {
            const newPost = document.createElement('div');
            newPost.classList.add('post');

            const currentLang = localStorage.getItem('selected_language') || 'ru';
            const deleteBtnText = translations[currentLang]["blog-delete-btn"] || "Удалить";

            newPost.innerHTML = `
                <h3>${title}</h3>
                <p>${text}</p>
                <button class="delete-btn" data-i18n="blog-delete-btn" data-index="${index}">${deleteBtnText}</button>
            `;

            const deleteBtn = newPost.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                savedPosts.splice(index, 1);
                localStorage.setItem('myBlogPosts', JSON.stringify(savedPosts));
                refreshPosts();
            });

            postsContainer.insertBefore(newPost, postsContainer.firstChild);
        }

        function refreshPosts() {
            postsContainer.innerHTML = '';
            savedPosts.forEach((post, idx) => {
                renderPost(post.title, post.text, idx);
            });
        }

        refreshPosts();

        blogForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const titleValue = titleInput.value.trim();
            const textValue = textInput.value.trim();

            if (titleValue === "" || textValue === "") {
                alert("Пожалуйста, заполните все поля!");
                return;
            }

            savedPosts.push({ title: titleValue, text: textValue });
            localStorage.setItem('myBlogPosts', JSON.stringify(savedPosts));
            refreshPosts();

            titleInput.value = "";
            textInput.value = "";
        });
    }
});
const btn = document.getElementById('theme-toggle');

// 1. Проверяем сохраненную тему при загрузке страницы
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    if (btn) btn.textContent = '🌙 Темная тема';
}

// 2. Логика переключения по клику на кнопку
if (btn) {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            btn.textContent = '🌙 Темная тема';
        } else {
            localStorage.setItem('theme', 'light');
            btn.textContent = '☀️ Светлая тема';
        }
    });
}

