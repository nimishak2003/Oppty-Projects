/* REGISTER */
function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (user == "" || pass == "") {
    document.getElementById("regMsg").innerHTML = "Please enter details";
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  document.getElementById("regMsg").innerHTML = "Registration Successful!";
}

/* LOGIN */
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("loggedInUser", user);

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("welcome").innerHTML = "Welcome " + user;
  } else {
    document.getElementById("loginMsg").innerHTML = "Invalid Login";
  }
}

/* SHOW REGISTER */
function showRegister() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}

/* SHOW LOGIN */
function showLogin() {
  document.getElementById("registerBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

/* AUTO LOGIN */
window.onload = function () {
  let user = localStorage.getItem("loggedInUser");

  if (user) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("welcome").innerHTML = "Welcome " + user;
  }
};

/* LOGOUT */
function logout() {
  localStorage.removeItem("loggedInUser");

  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}
