function addTask() {
  let task = document.getElementById("taskInput").value;
  let date = document.getElementById("taskDate").value;
  let time = document.getElementById("taskTime").value;

  if (task == "") {
    alert("Enter task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = task + " (" + date + " " + time + ")";

  li.onclick = function () {
    li.classList.toggle("completed");
  };

  let delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.className = "delete";

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  document.getElementById("taskInput").value = "";
}
