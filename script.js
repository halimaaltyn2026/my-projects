// === КОД ДЛЯ КНОПКИ СОВЕТОВ (Главная страница) ===
const btn = document.getElementById('magicBtn');
const message = document.getElementById('magicMessage');

const tips = [
    "Пишите чистый код и не забывайте оставлять комментарии.",
    "Регулярно делайте коммиты в Git, разделяя задачи.",
    "Ошибки в консоли — это не провал, а инструмент поиска решений.",
    "Лучший способ закрепить теорию — сразу применить её на практике."
];

// Проверяем, есть ли кнопка на этой странице, чтобы код не выдавал ошибку
if (btn && message) {
    btn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * tips.length);
        message.textContent = tips[randomIndex];
    });
}


// === КОД ДЛЯ БЛОГА (Страница blog.html) ===
const blogForm = document.getElementById('blog-form');
const titleInput = document.getElementById('post-title'); 
const textInput = document.getElementById('post-text');
const postsContainer = document.getElementById('posts-container');

// Проверяем, есть ли форма блога на этой странице
if (blogForm) {
    blogForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Останавливаем перезагрузку страницы

        const titleValue = titleInput.value.trim();
        const textValue = textInput.value.trim();

        if (titleValue === "" || textValue === "") {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        // Создаем новый пост
        const newPost = document.createElement('div');
        newPost.classList.add('post');

        newPost.innerHTML = `
            <h3>${titleValue}</h3>
            <p>${textValue}</p>
        `;

        // Добавляем пост наверх ленты
        postsContainer.insertBefore(newPost, postsContainer.firstChild);

        // Очищаем форму
        titleInput.value = "";
        textInput.value = "";
    });
}
