"use srtict"
// ===============Функції=====================
// ==Задача №1==
// function showName(){
//    console.log('Василь!');
// }
// setTimeout(showName, 0);
// console.log('Микола!');

// ==Задача №2==
showMessage();
function showMessage(){
   console.log('Повідомлення');
}

// ==Задача №3==
let showMassage = function () {
   console.log('Повідомлення 2');
}
showMassage();

// ==Задача №4==
let mussage = 'Повідомлення 3';
if (2 > 1) {
   function showMussage(){
       console.log(mussage);
   }
}
showMussage();
// ===============Масиви=====================
// ==Задача №1==
let arr = ['Іван', 'Іштван', 'Оля',];
let newArr = arr;
newArr.push('Петро');
console.log(arr.length);

// ==Задача №2==
let arrUsers = ['Іван', 'Іштван',];
arrUsers.push('Оля');
console.log(arrUsers);

arrUsers.splice(1, 1, 'Петро');
console.log(arrUsers);

//Пошук елементу 'Іштван' та заміна його на 'Петро'
// звичайний цикл
let arrOneUsers = ['Іван', 'Іштван',];
arrOneUsers.push('Оля');

for (let i = 0; i < arrOneUsers.length; i++){
   if (arrOneUsers[i] === 'Іштван'){
      arrOneUsers[i] = 'Петро';
   }
}
console.log(arrOneUsers);

// стрілочна функція
let usersArr = ['Іван', 'Іштван',];
usersArr.push('Оля');

const replacementArr = usersArr.map(user =>{
   if (user === 'Іштван'){
      (user = 'Петро');
   }
   return user;
})
console.log(replacementArr);

// звичайний синтаксис функції
let usersArrOne = ['Іван', 'Іштван', 'Іван', 'Іван', 'Іштван', 'Іштван'];
usersArr.push('Оля');

const replacementArrOne = usersArr.map(function (user) {
   if (user === 'Іштван'){
      user = 'Петро';
   }
   return user;
})
console.log(replacementArrOne);

// видалити перший елемент масиву і показати його
// отже, треба оголосити змінну і присвоїти їй  результат виконання методу масиву shift() і вивести змінну у консоль
// наприклад
let usersArrTwo = ['Іван', 'Іштван'];
const delFirstElem = usersArrTwo.shift();
console.log(delFirstElem);


arrUsers.unshift('Марія', 'Павло',);
console.log(arrUsers);

// ==Задача №3==
let removed = arr.splice(1, 1);
console.log(removed);

// ==Задача №4==
let str = 'Іван,Іштван,Оля';
console.log(str);

let arrOne = str.split(',');
console.log(arrOne);

// ==Задача №5==
let arrTwo = [9, 2, 8];
let reduceValue = arrTwo.reduce(function(previousValue, item, index, array){
   console.log(previousValue);
});

// ===Documet object model (DOM)======
// // ==Задача №1==
let elem = document.querySelector('[data-say-hi]');
console.log(elem.dataset.sayHi);

// // ==Задача №2 (можна так)==
let elemOne = document.querySelectorAll('li');
console.log(elemOne[1]);
// Краще рішення задачі №2 від ментора Ice
let yonchiElem = document.querySelectorAll('li');
yonchiElem.forEach(li => {
   if (li.textContent.toLowerCase() === 'йончі'){
      console.log(li.textContent);
   }
})

// // ==Задача №3==
let elemTwo = document.querySelectorAll('.like')
console.log(elemTwo);

// // ==Задача №4==
// const list = document.querySelectorAll('ul');
// list.insertAdjacementHTML(
//    'beforeend',
//    '<li>Текст</li>'
// );

// ===============JavaScript розміри, прокрутка та координати елементів на сторінці=====================
// ==Задача №1==
// Узнать ширину прокрутки
// Ширина зі смугою
 const windowWidth = window.innerWidth;  
//  Ширина без смуги
const clientWidth = document.documentElement.clientWidth;
//  Ширина прокрутки
const scrollWidth = windowWidth - clientWidth;
console.log(scrollWidth);

// ==Задача №2==
function setScrollToOptions(){
   window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
   })
}
setTimeout(setScrollToOptions, 1000);

// ==Задача №3==
// Отримати координати трьох елементів на сторінці 
// зробила відносно вікна браузера
const itemOne = document.querySelector('.page__array')
const getItemCoords = itemOne.getBoundingClientRect();
console.log(getItemCoords);

const itemTwo = document.querySelector('.lesson__block')
const getItemTwoCoords = itemTwo.getBoundingClientRect();
console.log(getItemTwoCoords);

const itemThree = document.querySelector('h1')
const getItemThreeCoords = itemThree.getBoundingClientRect();
console.log(getItemThreeCoords);