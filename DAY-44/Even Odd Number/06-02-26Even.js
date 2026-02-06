function checkEvenOdd() {
  let n = document.getElementById("num").value;
  let result = document.getElementById("result");

  if (n === "") {
    result.style.color = "red";
    result.innerHTML = "❌ Please enter a number";
    return;
  }

  n = Number(n);

  if (n % 2 === 0) {
    result.style.color = "green";
    result.innerHTML = `✅ ${n} is an EVEN number`;
  } else {
    result.style.color = "blue";
    result.innerHTML = `🔵 ${n} is an ODD number`;
  }
}
