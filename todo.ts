
interface Task {
    id: string;
    text: string;
    completed: boolean;
}

const STORAGE_KEY = 'myTodoListTasks';

let tasks: Task[] = [];

const taskInput = document.querySelector('#taskInput') as HTMLInputElement | null;
const addBtn = document.querySelector('#addBtn') as HTMLButtonElement | null;
const clearAllBtn = document.querySelector('#clearAllBtn') as HTMLButtonElement | null;
const taskList = document.querySelector('#taskList') as HTMLUListElement | null;

function saveTasks(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks(): void {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
            tasks = parsed;
            renderTasks();
        }
    } catch (error) {
        console.error("Ошибка при чтении из localStorage:", error);
    }
}

function renderTasks(): void {
    if (!taskList) return;
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.style.cursor = 'pointer';

        const textSpan = document.createElement('span');
        textSpan.textContent = task.text;

        if (task.completed) {
            textSpan.style.textDecoration = 'line-through';
            li.style.opacity = '0.5';
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.style.marginLeft = '10px';

        li.addEventListener('click', () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        deleteBtn.addEventListener('click', (event: MouseEvent) => {
            event.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function addTask(): void {
    if (!taskInput) return;

    const text = taskInput.value.trim();
    if (text === '') return;

    const newTask: Task = {
        id: crypto.randomUUID(),
        text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    taskInput.value = '';
}

if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
        tasks = [];
        saveTasks();
        renderTasks();
    });
}

if (addBtn) {
    addBtn.addEventListener('click', addTask);
}

if (taskInput) {
    taskInput.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter') addTask();
    });
}

loadTasks();
