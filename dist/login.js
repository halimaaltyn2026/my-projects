var form = document.querySelector('form');
var email = document.getElementById('email');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Кнопка работает! Почта: " + email.value);
});
