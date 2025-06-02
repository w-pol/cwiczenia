https://w-pol.github.io/cwiczenia/
https://playcode.io/

// To jest komentarz

/* To jest
   komentarz
   w kilku
   liniach */

console.log('Hello world!');

let zmienna;
console.log(zmienna);
zmienna = 10;
console.log(zmienna);
zmienna = 'tekst';
console.log(zmienna);

const STALA = 'Stała';
// STALA = "Tekst";
console.log(STALA);

const obiekt = { STALA, zmienna, inna: 0 };
console.log(obiekt);
console.log(obiekt.STALA);
console.log(obiekt.zmienna);
console.log(obiekt.inna);

function dodajDwieLiczby(a, b) {
  return a + b;
}

const dwieLiczby = dodajDwieLiczby();

const tablica = ['kot', 'pies', 'krowa'];
console.log(tablica[0]);
console.log(tablica[1]);
console.log(tablica[2]);

let x = 10;
if (x > 10) {
  console.log('x>10');
} else if (x < 10) {
  console.log('x<10');
} else {
  console.log('x>10');
}

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

function zmienKolorTła() {
  document.body.style.backgroundColor = 'tomato';
}

document.body.addEventListener('click', zmienKolorTła);

const button = document.createElement('button');
button.style.height = '100px';
button.style.width = '100px';

document.body.appendChild(button);
