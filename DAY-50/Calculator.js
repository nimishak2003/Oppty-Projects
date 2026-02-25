let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function percentage() {
  if (display.value !== "") {
    display.value = parseFloat(display.value) / 100;
  }
}

function square() {
  if (display.value !== "") {
    display.value = Math.pow(parseFloat(display.value), 2);
  }
}

function calculate() {
  try {
    display.value = Function("return " + display.value)();
  } catch {
    display.value = "Error";
  }
}
