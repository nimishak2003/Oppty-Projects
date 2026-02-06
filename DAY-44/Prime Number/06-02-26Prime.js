function checkPrime() {
  const input = document.getElementById("num");
  const output = document.getElementById("output");

  const n = Number(input.value);

  if (!input.value.trim()) {
    output.className = "result bad";
    output.textContent = "❌ Please enter a number.";
    return;
  }

  if (n <= 1) {
    output.className = "result bad";
    output.textContent = `❌ ${n} is NOT a prime number.`;
    return;
  }

  let isPrime = true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    output.className = "result ok";
    output.textContent = `✅ ${n} is a PRIME number.`;
  } else {
    output.className = "result bad";
    output.textContent = `❌ ${n} is NOT a prime number.`;
  }
}
