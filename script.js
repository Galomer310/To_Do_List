document.getElementById('add-task').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });
  
  document.getElementById('clear-tasks').addEventListener('click', function() {
    document.getElementById('todo-list').innerHTML = '';
  });
  
  function addTask(taskText) {
    const list = document.getElementById('todo-list');
    
    const li = document.createElement('li');
    
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '✖';
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-check');
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        taskTextEl.classList.add('completed');
      } else {
        taskTextEl.classList.remove('completed');
      }
    });
    
    const taskTextEl = document.createElement('span');
    taskTextEl.classList.add('task');
    taskTextEl.textContent = taskText;
    
    li.appendChild(deleteBtn);
    li.appendChild(checkbox);
    li.appendChild(taskTextEl);
    
    list.appendChild(li);
  }
  