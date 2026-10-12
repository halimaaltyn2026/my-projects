// 1. Описываем структуру ответа для TypeScript
interface DiscountResult {
    originalPrice: number;   // Исходная цена
    discountPercent: number; // Процент скидки
    discountAmount: number;  // Сколько денег сэкономили
    finalPrice: number;      // Итоговая цена к оплате
}

// 2. Функция для математического расчета скидки
function calculateDiscount(price: number, discount: number): DiscountResult {
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    return {
        originalPrice: price,
        discountPercent: discount,
        discountAmount: discountAmount,
        finalPrice: finalPrice
    };
}

// 3. Функция для проверки ошибок (валидации)
function validateInput(price: number, discount: number): string | null {
    if (isNaN(price) || isNaN(discount)) {
        return "Ошибка: Введенные данные должны быть числами!";
    }
    if (price <= 0) {
        return "Ошибка: Цена должна быть больше нуля!";
    }
    if (discount < 0 || discount > 100) {
        return "Ошибка: Скидка должна быть от 0% до 100%!";
    }
    return null; // Если всё правильно, ошибок нет
}

// 4. Проверяем, как работает наша программа
const p = 1000;
const d = 15;
const err = validateInput(p, d);

if (err) {
    console.log(err);
} else {
    const res = calculateDiscount(p, d);
    console.log("Price:", res.originalPrice);
    console.log("Discount:", res.discountPercent);
    console.log("Final:", res.finalPrice);
}
