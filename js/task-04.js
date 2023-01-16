const counterValue = document.querySelector("#value");
counterValue.textContent = "0";
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener("click", onBtnDecrementClick);
btnIncrement.addEventListener("click", onBtnIncrementClick);

function onBtnDecrementClick(event) {
  let currentNumber = Number(counterValue.textContent);
  if (isNaN(currentNumber)) {
    currentNumber = 0;
  }
  currentNumber -= 1;
  counterValue.textContent = currentNumber;
}

function onBtnIncrementClick(event) {
  let currentNumber = Number(counterValue.textContent);
  if (isNaN(currentNumber)) {
    currentNumber = 0;
  }
  currentNumber += 1;
  counterValue.textContent = currentNumber;
}
