function findFactorial() {
  let n = document.getElementById("num").value;
  let result = document.getElementById("result");

  if (n === "") {
    result.style.color = "red";
    result.innerHTML = "❌ Please enter a number";
    return;
  }

  n = Number(n);

  if (n < 0) {
    result.style.color = "red";
    result.innerHTML = "❌ Factorial is not defined for negative numbers";
    return;
  }

  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  result.style.color = "green";
  result.innerHTML = `✅ Factorial of ${n} is ${fact}`;
}
