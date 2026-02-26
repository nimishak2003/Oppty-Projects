let allQuestions = [
  {
    q: "HTML stands for?",
    o: ["Hyper Text Markup Language", "High Tool ML", "Home Tool", "None"],
    a: 0,
  },
  {
    q: "CSS is used for?",
    o: ["Structure", "Styling", "Database", "Server"],
    a: 1,
  },
  {
    q: "JS is used for?",
    o: ["Styling", "Interactivity", "Structure", "Hosting"],
    a: 1,
  },
  {
    q: "Which tag creates link?",
    o: ["&lt;a&gt;", "&lt;link&gt;", "&lt;url&gt;", "&lt;href&gt;"],
    a: 0,
  },
  {
    q: "Which property changes color?",
    o: ["font", "background", "color", "style"],
    a: 2,
  },
  {
    q: "Which is backend language?",
    o: ["HTML", "CSS", "Python", "Bootstrap"],
    a: 2,
  },
  {
    q: "Which symbol used for id in CSS?",
    o: [".", "#", "*", "@"],
    a: 1,
  },
];

let questions = [];
let current = 0;
let score = 0;
let timer;
let timeLeft = 20;

function startQuiz() {
  let name = document.getElementById("username").value;
  if (name == "") {
    alert("Enter your name");
    return;
  }

  questions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

  current = 0;
  score = 0;

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("quizPage").classList.remove("hidden");

  loadQuestion();
  startTimer();
}

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = q.q;

  let html = "";
  q.o.forEach((opt, index) => {
    html += `
        <label class="option-item">
            <input type="radio" name="option" value="${index}">
            ${opt}
        </label>`;
  });

  document.getElementById("options").className = "options";
  document.getElementById("options").innerHTML = html;
}

function nextQuestion() {
  checkAnswer();

  if (current < questions.length - 1) {
    current++;
    loadQuestion();
    resetTimer();
  } else {
    endQuiz();
  }
}

function checkAnswer() {
  let selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    if (parseInt(selected.value) === questions[current].a) {
      score++;
    }
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
    if (timeLeft <= 0) {
      nextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 20;
  document.getElementById("time").innerText = timeLeft;
  startTimer();
}

function endQuiz() {
  clearInterval(timer);

  document.getElementById("quizPage").classList.add("hidden");
  document.getElementById("resultPage").classList.remove("hidden");

  let total = questions.length;
  let percent = (score / total) * 100;

  document.getElementById("finalScore").innerText =
    "Score: " + score + " / " + total;

  document.getElementById("accuracy").innerText =
    "Accuracy: " + percent.toFixed(2) + "%";

  alert("🎉 Your Quiz is Done!");
}

function goToLogin() {
  document.getElementById("resultPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
  document.getElementById("username").value = "";
}
