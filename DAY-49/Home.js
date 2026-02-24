function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "nimisha@oppty.in" && pass === "nimmi@123") {
    alert("Login Successful!");
    window.location.href = "Register.html"; 
  } else {
    alert("Invalid Username or Password");
  }
}
