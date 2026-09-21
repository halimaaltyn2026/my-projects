// 1. Описываем структуру объекта задачи для localStorage
interface Task {
    text: string;
    completed: boolean;
}

// 2. Получаем HTML-элементы с явным указанием их типов
const taskInput = document.querySelector('#taskInput') as HTMLInputElement | null;
const addBtn = document.querySelector('#addBtn') as HTMLButtonElement | null;
const clearAllBtn = document.querySelector('#clearAllBtn') as HTMLButtonElement | null;
const taskList = document.querySelector('#taskList') as HTMLUListElement | null;

// 3. Функция, которая собирает задачи с экрана и сохраняет их в память
function saveTasks(): void {
    const tasks: Task[] = [];
    
    // Используем NodeListOf<HTMLLIElement> для работы с элементами списка
    const listItems = document.querySelectorAll('#taskList li') as NodeListOf<HTMLLIElement>;
    
    listItems.forEach((li: HTMLLIElement) => {
        // Убираем текст кнопки "Х" из названия задачи. 
        // Проверяем на наличие первого дочернего узла, чтобы избежать ошибок типизации.
        const text = li.firstChild && li.firstChild.textContent 
            ? li.firstChild.textContent.trim() 
            : "";

        const isCompleted = li.classList.contains('completed');
        tasks.push({ text, completed: isCompleted });
    });
    
    localStorage.setItem('myTodoListTasks', JSON.stringify(tasks));
}

// 4. Функция, которая достает задачи из памяти при открытии сайта
function loadTasks(): void {
    const saved = localStorage.getItem('myTodoListTasks');
    if (!saved) return;
    
    try {
        const tasks: Task[] = JSON.parse(saved);
        tasks.forEach((task: Task) => {
            createTaskElement(task.text, task.completed);
        });
    } catch (error) {
        console.error("Ошибка при чтении из localStorage:", error);
    }
}

// 5. Функция создания одного элемента на экране
function createTaskElement(text: string, isCompleted: boolean = false): void {
    if (!taskList) return; // Защита от потенциальной ошибки, если список не найден в HTML

    const li = document.createElement('li');
    li.textContent = text;
    li.style.cursor = 'pointer';
    
    if (isCompleted) {
        li.classList.add('completed');
        li.style.textDecoration = 'line-through';
        li.style.opacity = '0.5';
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.marginLeft = '10px';

    // Обработчик клика для зачеркивания задачи
    li.addEventListener('click', function(this: HTMLLIElement) {
        this.classList.toggle('completed');
        if (this.style.textDecoration === 'line-through') {
            this.style.textDecoration = 'none';
            this.style.opacity = '1';
        } else {
            this.style.textDecoration = 'line-through';
            this.style.opacity = '0.5';
        }
        saveTasks(); // Сохраняем изменения
    });

    // Обработчик клика для удаления задачи
    deleteBtn.addEventListener('click', function(event: MouseEvent) {
        event.stopPropagation();
        li.remove();
        saveTasks(); // Сохраняем изменения после удаления
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// 6. Функция добавления новой задачи
function addTask(): void {
    if (!taskInput) return; // Защита, если инпут не найден

    const text = taskInput.value.trim();
    if (text === '') return;

    createTaskElement(text);
    saveTasks(); // Сохраняем новую задачу
    taskInput.value = ''; // Очищаем поле ввода
}

// 7. Навешиваем слушатели событий с проверкой элементов на null
if (clearAllBtn && taskList) {
    clearAllBtn.addEventListener('click', function() {
        taskList.innerHTML = '';
        localStorage.removeItem('myTodoListTasks'); // Очищаем память
    });
}

if (addBtn) {
    addBtn.addEventListener('click', addTask);
}

if (taskInput) {
    taskInput.addEventListener('keypress', function(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
}

// 8. Запускаем проверку памяти сразу при загрузке страницы
loadTasks();
