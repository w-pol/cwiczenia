import { example1 } from "./exercises/example1.js";
import { example2 } from "./exercises/example2.js";
import { example3 } from "./exercises/example3.js";
import { example4 } from "./exercises/example4.js";
import { example5 } from "./exercises/example5.js";

const exercises = [
  document.getElementById("exercise1"),
  document.getElementById("exercise2"),
  document.getElementById("exercise3"),
  document.getElementById("exercise4"),
  document.getElementById("exercise5"),
];

function removeActive() {
  for (let i = 0; i < exercises.length; i++) {
    exercises[i].classList.remove("active");
  }
  example1.removeElement();
  example2.removeElement();
  example3.removeElement();
  example4.removeElement();
  example5.removeElement();
}

example1.addElement();

for (let i = 0; i < exercises.length; i++) {
  exercises[i].addEventListener("click", () => {
    removeActive();
    exercises[i].classList.add("active");
    switch (i) {
      case 0:
        example1.addElement();
        break;
      case 1:
        example2.addElement();
        break;
      case 2:
        example3.addElement();
        break;
      case 3:
        example4.addElement();
        break;
      case 4:
        example5.addElement();
        break;
      default:
        break;
    }
  });
}
