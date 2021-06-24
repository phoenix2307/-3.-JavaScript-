'use strict';

// THIS / КОНТЕКСТ

/* 

Отличная подсказка к теме this:

Поскольку вызов функции имеет наибольшее влияние на this, отныне не спрашивайте:

Откуда берется this?

а спрашивайте: Как функция вызывается?

А в случае со стрелочной функцией спросите: Каков this там, где объявлена стрелочная функция?

Такой подход к this убережет вас от лишней головной боли.

Не путайтесь в контекстах!
*/

// function showThis(a, b) {

//     function wer() {
//         console.log(this);
//         this.a + this.b;
//     }
//     wer.call(showThis)
// }
// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);

//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };
// obj.sum();


// function User(name, id) {
//     this.name = name;
// //     this.id = id;
// //     this.human = true;
// // }
// // let ivan = new User('Ivan', 23);
// // console.log(ivan);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); // user - наш конткест, Smith - аргументы, которые мы добавляем
// sayName.apply(user, ['Smith']); // в apply тоже самое, но аргументы передаются в виде массива
// // Эти методы устаналивают контекст (ручное присвоение контекста) для функций. Сами функции при этом не вызываются

// // метод bind создает НОВУЮ функцию и под нее уже подвязывает контекст

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);

// 1. Обычная функция (обычный вызов функции): this = window, но если включен use strict - undefined
// 2. Если мы используем this внутри метода, то он всегда содержит ссылку на сам обьект, в котором взван метод
// 3. This в конструкторах и классах - это ссылка на новый экземпляр объекта
// 4. 





// Работа с classList - список классов элемента
/*

const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // количество классов у элемента
// console.log(btns[0].classList.item(2));  // обращение к классу по его индексу в списке

btns[1].classList.add('red'); // добавить класс
// btns[0].classList.remove('blue'); // удалить класс
// можно добавлять или удалять несколько классов одновременно. Прописывать через запятую

// btns[0].classList.toggle('blue'); // переключатель состояния класса 
//(то есть если он есть, то он удаляется, если нет такого класса - то добавляется)

console.log(btns[1].classList.contains('red')); // проверяет наличие класса у элемента, возвращает true или false

// if (btns[1].classList.contains('red')) {
//   console.log('класс red');
// }

btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }
  // это все можно реализовать с помощmю toggle, но лучше использовать вот такой способ с if else
  btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => { /
    /задаем условие для того, чтобы событие срабатывало только при клике по button
  if (event.target && event.target.matches('button.red')) {
    console.log('Hello');
  }
});



const btn = document.createElement('button'); // создать новую кнопку
btn.classList.add('red'); // Присвоить необходимый класс элементу
wrapper.append(btn); // добавить элемент на страницу
*/



/*
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  // это свойства нашего будущего обьекта
  // но сюда можно добавить и функцию - выйдет метод:
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

// также можно изменить свойство prototype.
// После этого все созданные этим конструктором объекты унаследуют эти изменения

User.prototype.exit = function () { // создаем новый метод exit
  console.log(`Пользователь ${this.name} вышел`);
};
// этот метод наследуют все сконструированные объекты после того, как был объявлен этот метод
const ivan = new User('ivan', 23); // вызов функции через new запускает конструктор обьекта
// при таком вызове мы получаем заготовку обьекта с подготовленным набором свойств и методов
// теперь в переменной ivan находится не ф-ция User,
// а обьект: User {name: "ivan", id: 23, human: true}
console.log(ivan);
const alex = new User('alex', 40);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();
*/