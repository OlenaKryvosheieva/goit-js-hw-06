const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputNumberCheck);

function onInputNumberCheck(event) {
  if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
