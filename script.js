const toDoList = document.getElementById("todo-list");
const addingBtn = document.getElementById("addBtn");
const newTaskInput = document.getElementById("newTask");
const clearTesk = document.getElementById("clear-tesk");
clearTesk.addEventListener("click", function(event) {
  toDoList.innerHTML = '';
});

addingBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const taskText = newTaskInput.value.trim();
  
  if (taskText) {
    const newTeskList = document.createElement('li');
    
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '❌';
    deleteBtn.addEventListener("click", function() {
      newTeskList.remove();
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('tesk-check');
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        taskSpan.classList.add('completed');  
      } else {
        taskSpan.classList.remove('completed');  
      }
    });
  
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task');
    taskSpan.textContent = taskText;

    newTeskList.appendChild(deleteBtn);
    newTeskList.appendChild(taskSpan);
    newTeskList.appendChild(checkbox);
    toDoList.appendChild(newTeskList);
    
    newTaskInput.value = '';
  } else {
    alert("Please enter a task.");
  }
});
