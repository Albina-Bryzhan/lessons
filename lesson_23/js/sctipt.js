"use srtict"

console.log('35' + - "22");

console.log('35' * "22");

// console.log('558' > 22++);

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

console.log(!false && 11 || 18 && !'');

let name = 0;
console.log(name ?? "Без імені");

if (1 === "1") {
   console.log('Правда!');
} else {
   console.log('Брехня!');
}

if (5 == "5") {
   console.log('Правда!');
} else {
   console.log('Брехня!');
}

let message = (92 > '11' && 58 < 100) ? 'Правда!' : 'Брехня!';
console.log(message);

if (0) {
   console.log('Брехня!');
} else if (" "){
   console.log('Правда!');
}
// ======================================
// Цикли: for, while в JavaScript
// =======================================
// Задача №1
let num = 1;
while (num < 6) {
   console.log(num);
   num++;
}

// Задача №2
// Не вірно. Оcтанній результат 1, тому що при 0 не буде запущений цикл, 0 прирівнюється до "false".
let numTwo = 8;
while (numTwo) {
   console.log(numTwo);
   numTwo--;
}

// Задача №3
let numThree = 0;
while (numThree < 3) {
   console.log(`Число: ${numThree}`);
   numThree++;
}

// Задача №4
firstFor: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++){
      if (size == 1){
         break firstFor;
      }
   console.log(size);
   }
}
// ======================================
// Number в JavaScript
// =======================================
// Задача №1
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

// Задача №2
let value = parseFloat("135.58px");
console.log(value);

// Задача №3
let valueOne = 58 + 'Freelancer';
if(isNaN){
   console.log('Result is NaN')
}

// Задача №4
console.log(Math.max(10,58,39,-150,0));

// Задача №5
console.log(Math.floor(58.858));

// ======================================
// String в JavaScript
// =======================================
// Задача №1
// let fls = 'Freelancer';
// let text = 'Hi! I am ${fls}';
// console.log(text);
// Запис невірний

// Задача №2
let text = 'фрілансер';
let nthSymbol = text[5];
console.log(nthSymbol);

// Задача №3
let textOne = 123 + "456";
console.log(textOne);

// Задача №4
let textTwo = 'фрілансер';
console.log(textTwo.toUpperCase());

// Задача №5
let textThree = 'фрілансер';
console.log(textThree.slice(3, 6));

// Задача №6
let textFour = 'фрілансер';
console.log(textFour.includes('лан', 4));

