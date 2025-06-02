const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Przeciągnij mnie!";
button.classList.add("button-1");
button.classList.add("absolute");
button.style.top = "9.4%";

const h1 = document.createElement("h1");
h1.textContent = "Przesuń przycisk przy pomocy myszki";

function addElement() {
  body.appendChild(h1);
  body.appendChild(button);
  button.addEventListener("mousedown", startDrag);
}

function removeElement() {
  if (!button.parentNode) return;
  button.removeEventListener("mousedown", startDrag);
  body.removeChild(button);
  body.removeChild(h1);
}

function startDrag(event) {
  event.preventDefault();
  const initialX = event.clientX - button.offsetLeft;
  const initialY = event.clientY - button.offsetTop + window.innerHeight * 0.25;

  function drag(event) {
    event.preventDefault();
    button.style.left = event.clientX - initialX + "px";
    button.style.top = event.clientY - initialY + "px";
  }

  function stopDrag() {
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", stopDrag);
  }

  window.addEventListener("mousemove", drag);
  window.addEventListener("mouseup", stopDrag);
}

const example3 = { addElement, removeElement };

export { example3 };
