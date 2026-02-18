const principalEl = document.getElementById("principal");
const rateEl = document.getElementById("rate");
const monthsEl = document.getElementById("months");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");
const btn = document.getElementById("btn");

function calculateEMI() {
  errorEl.textContent = "";

  const P = Number(principalEl.value);
  const annualRate = Number(rateEl.value);
  const n = Number(monthsEl.value);

  if (!P || P <= 0 || !annualRate || annualRate <= 0 || !n || n <= 0) {
    errorEl.textContent =
      "⚠️ Please enter valid positive values for all fields.";
    resultEl.textContent = "Monthly EMI: --";
    return;
  }

  const r = annualRate / 12 / 100;

  const pow = Math.pow(1 + r, n);
  const emi = (P * r * pow) / (pow - 1);

  resultEl.textContent = `Monthly EMI: ${emi.toFixed(2)}`;
}

btn.addEventListener("click", calculateEMI);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calculateEMI();
});
