// Находим кнопку и место для текста на странице
const btn = document.getElementById('magicBtn');
const message = document.getElementById('magicMessage');

// Профессиональные советы для разработчиков
const tips = [
    "Пишите чистый код и не забывайте оставлять понятные комментарии.",
    "Регулярно делайте коммиты в Git, разделяя большие задачи на мелкие шаги.",
    "Ошибки в консоли — это не провал, а инструмент для поиска правильного решения.",
    "Лучший способ закрепить теорию — сразу применить её на практике в мини-проекте."
];

// Настраиваем клик по кнопке
btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    message.textContent = tips[randomIndex];
});
