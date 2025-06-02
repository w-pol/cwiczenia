const body = document.querySelector("body");
const button = document.createElement("button");
button.textContent = "Kliknij mnie!";
button.classList.add("button-1");

const h1 = document.createElement("h1");
h1.textContent = "Zmień kolor TŁA po kliknięciu w body";

function getButtons() {
  return document.querySelectorAll("button");
}

function changeColor() {
  const buttons = getButtons();
  if (body.style.backgroundColor !== "tomato") {
    body.style.backgroundColor = "tomato";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("button-alt");
    }
  } else {
    body.style.backgroundColor = "cornflowerblue";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("button-alt");
    }
  }
}

function addElement() {
  button.addEventListener("click", changeColor);
  body.appendChild(h1);
  body.appendChild(button);
}

function removeElement() {
  body.style.backgroundColor = "cornflowerblue";
  const buttons = getButtons();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("button-alt");
  }
  if (!button.parentNode) return;

  button.removeEventListener("click", changeColor);
  body.removeChild(button);
  body.removeChild(h1);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("button-alt");
  }
}

const example1 = { addElement, removeElement };

export { example1 };
