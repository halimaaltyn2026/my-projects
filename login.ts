// 1. Создаем строгий тип для ролей
type UserRole = 'admin' | 'user' | 'guest';

// 2. Описываем структуру объекта пользователя
interface User {
    id: number;
    name: string;
    role: UserRole;
    email: string; // Сделаем email обязательным, раз мы его берем из формы
}

// 3. Функция для создания приветственного сообщения
function getWelcomeMessage(user: User): string {
    if (user.role === 'admin') {
        return `Добро пожаловать, Администратор ${user.name}! Доступ к панели открыт.`;
    } else if (user.role === 'user') {
        return `Привет, ${user.name}! Твой аккаунт (${user.email}) успешно авторизован.`;
    } else {
        return `Здравствуйте, Гость! Пожалуйста, проверьте данные.`;
    }
}

// 4. Ваш рабочий код для формы
const form = document.querySelector('form') as HTMLFormElement;
const email = document.getElementById('email') as HTMLInputElement;

form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    // Представим, что если почта admin@test.com, то заходит админ, а если любая другая — обычный юзер
    let assignedRole: UserRole = 'user';
    let userName = 'Пользователь';

    if (email.value === 'admin@test.com') {
        assignedRole = 'admin';
        userName = 'Халима (Админ)';
    }

    // Создаем объект пользователя по нашему строгому интерфейсу User!
    const currentUser: User = {
        id: Date.now(), // Уникальный ID на основе времени
        name: userName,
        role: assignedRole,
        email: email.value
    };

    // Выводим сообщение, сгенерированное функцией
    alert(getWelcomeMessage(currentUser));
});
