function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <span class ="task-text">${taskText} </span>
    <div class="actions">
      <i class="fa-solid fa-pen edit" onclick="editTask(this)"></i>
      <i class="fa-solid fa-trash delete" onclick="deleteTask(this)"></i>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function deleteTask(icon) {
  icon.parentElement.parentElement.remove();
}

function editTask(icon) {
  let taskSpan = icon.parentElement.previousElementSibling;
  let newTask = prompt("Edit task:", taskSpan.innerText);

  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.innerText = newTask;
  }
}