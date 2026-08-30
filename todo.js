const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const clearAllBtn = document.querySelector('#clearAllBtn');
const taskList = document.querySelector('#taskList');

function addTask() {
  const text = taskInput.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;
  li.style.cursor = 'pointer';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.style.marginLeft = '10px';

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
    if (li.style.textDecoration === 'line-through') {
      li.style.textDecoration = 'none';
      li.style.opacity = '1';
    } else {
      li.style.textDecoration = 'line-through';
      li.style.opacity = '0.5';
    }
  });

  deleteBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}

clearAllBtn.addEventListener('click', function() {
  taskList.innerHTML = '';
});

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') { addTask(); }
});
