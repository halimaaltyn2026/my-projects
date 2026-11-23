
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let isPowerOn = true; // Калькулятор изначально включен

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // 1. Логика включения/выключения (On / Off)
        if (button.classList.contains('off')) {
            isPowerOn = false;
            currentInput = '';
            display.value = '';
            display.style.backgroundColor = '#111'; // "Гасим" экран
            return;
        }

        if (button.classList.contains('on')) {
            isPowerOn = true;
            currentInput = '0';
            display.value = currentInput;
            display.style.backgroundColor = '#333'; // "Включаем" экран
            return;
        }

        // Если калькулятор выключен, остальные кнопки не должны работать
        if (!isPowerOn) return;

        // 2. Логика кнопки очистки (C)
        if (button.classList.contains('clear')) {
            currentInput = '0';
            display.value = currentInput;
            return;
        }

        // 3. Логика кнопки удаления последнего символа (⌫)
        if (button.classList.contains('backspace')) {
            // Если остался один символ, сбрасываем в '0'
            if (currentInput.length <= 1 || currentInput === '0') {
                currentInput = '0';
            } else {
                currentInput = currentInput.slice(0, -1);
            }
            display.value = currentInput;
            return;
        }

        // 4. Логика кнопки "Равно" (=)
        if (button.classList.contains('equals')) {
            try {
                // Заменяем возможные пустые или некорректные выражения перед подсчетом
                if (currentInput.trim() === '') return;
                
                // Считаем результат
                let result = eval(currentInput);
                
                // Округляем длинные дроби, чтобы они не вылезали за экран (например, 0.1 + 0.2)
                if (!Number.isInteger(result)) {
                    result = Math.round(result * 100000000) / 100000000;
                }
                
                currentInput = result.toString();
                display.value = currentInput;
            } catch (error) {
                display.value = 'Ошибка';
                currentInput = '0';
            }
            return;
        }

        // 5. Обработка ввода цифр и операторов
        // Если на экране чистый ноль, заменяем его новой цифрой (кроме точки и операторов)
        if (currentInput === '0' && !button.classList.contains('operator') && value !== '.') {
            currentInput = value;
        } else {
            // Защита от двойных операторов (например, не даст написать "++" или "+*")
            const lastChar = currentInput.slice(-1);
            const isCurrentOperator = button.classList.contains('operator');
            const isLastOperator = ['+', '-', '*', '/'].includes(lastChar);

            if (isCurrentOperator && isLastOperator) {
                // Заменяем старый оператор на новый нажатый
                currentInput = currentInput.slice(0, -1) + value;
            } else {
                currentInput += value;
            }
        }

        display.value = currentInput;
    });
});
