const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.textContent = "Napisz algorytm Euklidesa";

const img = document.createElement("img");
img.src =
  "https://oblicz.com.pl/wp-content/uploads/2022/09/algorytm-Euklidesa-na-odejmowanie-1.png";
img.style.marginTop = "24vh";
img.style.height = "50vh";

function addElement() {
  body.appendChild(h1);
  body.appendChild(img);
}

function removeElement() {
  if (h1.parentNode) body.removeChild(h1);
  if (img.parentNode) body.removeChild(img);
}

const example5 = { addElement, removeElement };

function euklides(a, b) {
  while (a !== b) {
    if (a === b) return a;
    else {
      if (a > b) a = a - b;
      else b = b - a;
    }
  }
  return a;
}

console.log(euklides(8, 12));

export { example5 };
