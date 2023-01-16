const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameOutputEl.textContent = event.currentTarget.value;
  if (nameOutputEl.textContent === "") {
    nameOutputEl.textContent = "Anonymous";
  }
}
