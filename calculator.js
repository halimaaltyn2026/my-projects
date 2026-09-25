const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('clear')) {
            currentInput = '';
            display.value = '';
            return;
        }

        if (button.classList.contains('equals')) {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = 'Ошибка';
                currentInput = '';
            }
            return;
        }

        currentInput += value;
        display.value = currentInput;
    });
});
