function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.innerText = taskText;

  // cmpltd //
  span.onclick = function () {
    span.classList.toggle("completed");
  };

  let btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  // Edit //
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    let newTask = prompt("Edit your task:", span.innerText);
    if (newTask !== null && newTask.trim() !== "") {
      span.innerText = newTask;
    }
  };

  // Delete //
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
