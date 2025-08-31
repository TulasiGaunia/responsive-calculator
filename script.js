const display = document.getElementById("display");

function appendNumber(number) {
  if(display.value === "0") display.value = number;
  else display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function sqrt() {
  if(display.value) display.value = Math.sqrt(eval(display.value));
}

function square() {
  if(display.value) display.value = Math.pow(eval(display.value), 2);
}

function inverse() {
  if(display.value) display.value = 1 / eval(display.value);
}

function toggleSign() {
  if(display.value) display.value = eval(display.value) * -1;
}
