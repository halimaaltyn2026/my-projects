
type UserRole = 'admin' | 'user' | 'guest';

interface User {
    id: number;
    name: string;
    role: UserRole;
    email: string;
}

function getWelcomeMessage(user: User): string {
    switch (user.role) {
        case 'admin':
            return `Добро пожаловать, Администратор ${user.name}! Доступ к панели открыт.`;
        case 'user':
            return `Привет, ${user.name}! Твой аккаунт (${user.email}) успешно авторизован.`;
        case 'guest':
            return `Здравствуйте, Гость! Пожалуйста, проверьте данные.`;
        default:
            // Элегантная проверка на полноту без лишних переменных
            return user.role satisfies never;
    }
}

const form = document.querySelector('form') as HTMLFormElement | null;
const emailInput = document.getElementById('email') as HTMLInputElement | null;

if (form && emailInput) {
    // Возвращаем точный SubmitEvent для доступа к e.submitter и другим свойствам
    form.addEventListener('submit', (e: SubmitEvent) => {
        e.preventDefault();

        const emailValue = emailInput.value.trim();
        let assignedRole: UserRole = 'user';
        let userName = 'Пользователь';

        if (!emailValue) {
            assignedRole = 'guest';
            userName = 'Гость';
        } else if (emailValue === 'admin@test.com') {
            assignedRole = 'admin';
            userName = 'Халима (Админ)';
        }

        const currentUser: User = {
            id: Date.now(),
            name: userName,
            role: assignedRole,
            email: emailValue
        };

        alert(getWelcomeMessage(currentUser));
    });
}
