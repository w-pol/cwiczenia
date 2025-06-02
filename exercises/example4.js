const input = document.createElement("input");
input.type = "text";
input.placeholder = "Podaj swoje imię";
input.style.height = "50px";
input.style.width = "200px";
input.style.fontSize = "20px";
input.style.textAlign = "center";
input.style.marginTop = "24vh";

const button = document.createElement("button");
button.textContent = "Zatwierdź";

const removeButton = document.createElement("button");
removeButton.textContent = "Usuń";

const h1 = document.createElement("h1");
h1.textContent = "Użyj localStorage";

const h2 = document.createElement("h2");
h2.style.marginTop = "24vh";

button.addEventListener("click", () => {
  const userName = input.value;
  sessionStorage.setItem("userName", userName);
  const helloMessage = `Witaj ${userName}!`;

  h2.textContent = helloMessage;

  removeElement();
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.body.appendChild(removeButton);
});

removeButton.addEventListener("click", () => {
  sessionStorage.removeItem("userName");
  removeElement();
  document.body.appendChild(h1);
  document.body.appendChild(input);
  document.body.appendChild(button);
});

function addElement() {
  document.body.appendChild(h1);

  if (!sessionStorage.getItem("userName")) {
    document.body.appendChild(input);
    document.body.appendChild(button);
  } else {
    const userName = sessionStorage.getItem("userName");
    const helloMessage = `Witaj ${userName}!`;
    h2.textContent = helloMessage;
    document.body.appendChild(h2);
    document.body.appendChild(removeButton);
  }
}

function removeElement() {
  if (input.parentNode) {
    document.body.removeChild(input);
  }
  if (button.parentNode) {
    document.body.removeChild(button);
  }
  if (removeButton.parentNode) {
    document.body.removeChild(removeButton);
  }
  if (h2.parentNode) {
    document.body.removeChild(h2);
  }
  if (h1.parentNode) {
    document.body.removeChild(h1);
  }
}

const example4 = { addElement, removeElement };

export { example4 };
