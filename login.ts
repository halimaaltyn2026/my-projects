const form = document.querySelector('form') as HTMLFormElement;
const email = document.getElementById('email') as HTMLInputElement;
form.addEventListener('submit', (e: SubmitEvent) => {
e.preventDefault();
alert("Кнопка работает! Почта: " + email.value);
});