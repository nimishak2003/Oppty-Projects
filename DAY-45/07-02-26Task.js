const chat = document.getElementById("chat");
const input = document.getElementById("taskInput");

function addTask(text, type) {
  const task = document.createElement("div");
  task.className = "task";

  task.innerHTML = `
    <div contenteditable="false">${text}</div>
    <small>${type}</small>
    <div class="icons">
      <i class="fa-solid fa-pen edit" onclick="editTask(this)"></i>
      <i class="fa-solid fa-trash delete" onclick="deleteTask(this)"></i>
    </div>
  `;

  chat.appendChild(task);
  chat.scrollTop = chat.scrollHeight;
}

function addTextTask() {
  if (input.value.trim() === "") return;
  addTask(input.value, "⌨️ Typed");
  input.value = "";
}

function deleteTask(icon) {
  icon.closest(".task").remove();
}

function editTask(icon) {
  const text = icon.closest(".task").querySelector("div");

  if (text.isContentEditable) {
    text.contentEditable = "false";
    icon.classList.replace("fa-check", "fa-pen");
  } else {
    text.contentEditable = "true";
    text.focus();
    icon.classList.replace("fa-pen", "fa-check");
  }
}

//Voice Input 
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";

function startVoice() {
  recognition.start();
}

recognition.onresult = (event) => {
  const voiceText = event.results[0][0].transcript;
  addTask(voiceText, "🎤 Voice");
};
