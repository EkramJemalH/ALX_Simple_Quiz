const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}
addBtn.addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = add(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
subtractBtn.addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = subtract(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

multiplyBtn.addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = multiply(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});

divideBtn.addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = divide(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
