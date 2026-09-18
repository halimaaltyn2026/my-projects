// 3. Функция для создания приветственного сообщения
function getWelcomeMessage(user) {
    if (user.role === 'admin') {
        return "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 " + user.name + "! \u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u0430\u043D\u0435\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442.";
    }
    else if (user.role === 'user') {
        return "\u041F\u0440\u0438\u0432\u0435\u0442, " + user.name + "! \u0422\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 (" + user.email + ") \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D.";
    }
    else {
        return "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0413\u043E\u0441\u0442\u044C! \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435.";
    }
}
// 4. Ваш рабочий код для формы
var form = document.querySelector('form');
var email = document.getElementById('email');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Представим, что если почта admin@test.com, то заходит админ, а если любая другая — обычный юзер
    var assignedRole = 'user';
    var userName = 'Пользователь';
    if (email.value === 'admin@test.com') {
        assignedRole = 'admin';
        userName = 'Халима (Админ)';
    }
    // Создаем объект пользователя по нашему строгому интерфейсу User!
    var currentUser = {
        id: Date.now(),
        name: userName,
        role: assignedRole,
        email: email.value
    };
    // Выводим сообщение, сгенерированное функцией
    alert(getWelcomeMessage(currentUser));
});
