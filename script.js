// the ul element that will contain the list items
const toDoList = document.getElementById("todo-list");
// the button add 
const addingBtn = document.getElementById("addBtn");
//  the input filed where you write your text 
const newTaskInput = document.getElementById("newTask");

addingBtn.addEventListener("click", function(event) {
  // Prevent form submission
  event.preventDefault();
  // Get the task text from the input field
  const taskText = newTaskInput.value.trim();
  
  // Only add the task if there's content in the input
  if (taskText) {
  // Create new list item
    const teskInput = document.createElement('li');
    
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '❌';
    deleteBtn.addEventListener("click", function() {
      teskInput.remove();
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('tesk-check');
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        taskSpan.classList.add('completed');  // Strike-through if checked
      } else {
        taskSpan.classList.remove('completed');  // Remove strike-through if unchecked
      }
    });
  
       // Create the task text span
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task');
    taskSpan.textContent = taskText;

    teskInput.appendChild(deleteBtn);
    teskInput.appendChild(checkbox);
    teskInput.appendChild(taskSpan);
    // Append the new task to the list
    toDoList.appendChild(teskInput);
    
    // Clear the input field after adding the task
    newTaskInput.value = '';
  } else {
    alert("Please enter a task.");
  }
});
