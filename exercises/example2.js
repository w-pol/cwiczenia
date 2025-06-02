const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Kliknij mnie!";
button.classList.add("button-1");
button.style.borderRadius = "0%";

const h1 = document.createElement("h1");
h1.textContent = "Zmień kolor TŁA – przełącz pomiędzy 4 kolorami";

function addElement() {
  body.appendChild(h1);
  body.appendChild(button);
  button.addEventListener("click", changeColor);
}

function removeElement() {
  if (!button.parentNode) return;

  button.removeEventListener("click", changeColor);
  body.removeChild(button);
  body.removeChild(h1);
}

function changeColor() {
  if (button.style.backgroundColor === "tomato") {
    button.style.backgroundColor = "olive";
  } else if (button.style.backgroundColor === "olive") {
    button.style.backgroundColor = "gold";
  } else if (button.style.backgroundColor === "gold") {
    button.style.backgroundColor = "white";
  } else {
    button.style.backgroundColor = "tomato";
  }
}

const example2 = { addElement, removeElement };

export { example2 };
