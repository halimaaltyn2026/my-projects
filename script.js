// === КОД ДЛЯ КНОПКИ СОВЕТОВ (Главная страница) ===
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


// === КОД ДЛЯ БЛОГА С СОХРАНЕНИЕМ И УДАЛЕНИЕМ (Страница blog.html) ===
const blogForm = document.getElementById('blog-form');
const titleInput = document.getElementById('post-title'); 
const textInput = document.getElementById('post-text');
const postsContainer = document.getElementById('posts-container');

if (blogForm) {
    // Получаем массив сохраненных постов из памяти браузера
    let savedPosts = JSON.parse(localStorage.getItem('myBlogPosts')) || [];

    // ФУНКЦИЯ ДЛЯ ОТРИСОВКИ ОДНОГО ПОСТА С КНОПКОЙ УДАЛЕНИЯ
    function renderPost(title, text, index) {
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        
        // Вставляем текст и кнопку удаления. Кнопке даем индекс этого поста
        newPost.innerHTML = `
            <h3>${title}</h3>
            <p>${text}</p>
            <button class="delete-btn" data-index="${index}">Удалить</button>
        `;
        
        // Находим кнопку удаления внутри только что созданного поста
        const deleteBtn = newPost.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            // Удаляем пост из массива по его индексу
            savedPosts.splice(index, 1);
            // Перезаписываем обновленный массив в память
            localStorage.setItem('myBlogPosts', JSON.stringify(savedPosts));
            // Перерисовываем всю ленту заново, чтобы индексы обновились
            refreshPosts();
        });

        postsContainer.insertBefore(newPost, postsContainer.firstChild);
    }

    // ФУНКЦИЯ ДЛЯ ПОЛНОЙ ПЕРЕРИСОВКИ ЛЕНТЫ
    function refreshPosts() {
        // Очищаем контейнер, кроме самого первого статичного поста, если нужно.
        // Чтобы очистить абсолютно всё динамическое:
        postsContainer.innerHTML = '';
        
        // Выводим каждый пост из памяти заново с правильными номерами (индексами)
        savedPosts.forEach((post, idx) => {
            renderPost(post.title, post.text, idx);
        });
    }

    // Запускаем отрисовку сохраненных постов при первой загрузке страницы
    refreshPosts();

    // ОБРАБОТКА ФОРМЫ (Публикация)
    blogForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const titleValue = titleInput.value.trim();
        const textValue = textInput.value.trim();

        if (titleValue === "" || textValue === "") {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        // Добавляем новый объект поста в наш массив
        savedPosts.push({ title: titleValue, text: textValue });
        // Сохраняем обновленный массив в localStorage
        localStorage.setItem('myBlogPosts', JSON.stringify(savedPosts));

        // Обновляем ленту на экране
        refreshPosts();

        // Очищаем поля ввода
        titleInput.value = "";
        textInput.value = "";
    });
}
