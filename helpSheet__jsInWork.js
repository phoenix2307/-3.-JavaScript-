//******************************************************************** */ classList МЕТОДЫ

const btns = document.querySelectorAll('button');

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
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
  // это все можно реализовать с помощmю toggle, но лучше использовать вот такой способ с if else
  // btns[1].classList.toggle('red');
});

//************************************************************************ // ДЕЛЕГИРОВАНИЕ //
/*
Обработчик события вешается на родителя. При этом есть два плюса:
1. позволяет влиять на все элементы в родителе даже, если они будут добавляться динамически
2. Обработчик вешается только на один элемент-родитель, нет нужды цеплять обработчик на детей

*/
const wrapper = document.querySelector('.btn-block'); // обращаемся к родителю, куда будем кидать делегирование
wrapper.addEventListener('click', (event) => { //задаем условие для того,
  // чтобы событие срабатывало только при клике по button
  if (event.target && event.target.matches('button.red')) {
    /*
    у event.target есть интересный метод matches() - можно добавить какое-то услоыие,
    при котором будет выполнятсяя событие. Например, перечень класов, которые должен иметь элемент
    */
    console.log('Hello');
  }
});


const btn = document.createElement('button'); // создать новую кнопку
btn.classList.add('red'); // Присвоить необходимый класс элементу
wrapper.append(btn); // добавить элемент на страницу

//
// ********************************************************** TimeOut // Анимация ***********************************
//
// setTimeout - позволяет вызвать функцию один раз через определённый интервал времени
// setInterval - позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
/*Параметры:
func|code
Функция или строка кода для выполнения. 
Обычно это функция. По историческим причинам можно передать и строку кода, но это не рекомендуется.
delay
Задержка перед запуском в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.
arg1, arg2…
Аргументы, передаваемые в функцию

/// ******************************************************** Рекурсия в setTimeout ***********************************
Это лучше чем использование интервала - можно контролировать паузы между ф-циями

вместо кода:
let timerId = setInterval(() => alert('tick'), 2000);

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

Итого:

Методы setInterval(func, delay, ...args) и setTimeout(func, delay, ...args) позволяют 
выполнять func регулярно или только один раз после задержки delay, заданной в мс.

Для отмены выполнения необходимо вызвать clearInterval/clearTimeout со значением, 
которое возвращают методы setInterval/setTimeout.

Вложенный вызов setTimeout является более гибкой альтернативой setInterval. Также 
он позволяет более точно задать интервал между выполнениями.

Планирование с нулевой задержкой setTimeout(func,0) или, что то же самое, 
setTimeout(func) используется для вызовов, которые должны быть исполнены как можно скорее, 
после завершения исполнения текущего кода.

Браузер ограничивает 4-мя мс минимальную задержку между пятью и более вложенными вызовами setTimeout, 
а также для setInterval, начиная с 5-го вызова.

пример интервала с заданным количеством раз:

const btn = document.querySelector('.btn');
let timerId;
let i = 0;

btn.addEventListener('click', () => {
  // timerId = setTimeout(logger, 1000);
  timerId = setInterval(logger, 500);

});

function logger() { // отслеживаем сколько раз повторился интервал
  if (i === 3) {
    clearInterval(timerId);
  }
  console.log('some text');
  i++;
}

Пример рекурсии:

let id = setTimeout(function log() {
  console.log('Hello Alex');
  id = setTimeout(log, 500);
}, 500);


Пример анимации:

const btn = document.querySelector('.btn');

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0; // стартовая позиция нашего элемента
  //нужна ф-ция, которая будет запускаться с интервалом и меняь позицию нашего элемента

  const id = setInterval(frame, 10);

  function frame() {
    if (pos == 300) { //точка остановки элемента
      clearInterval();
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
btn.addEventListener('click', myAnimation);

************************************************* DATE (Работа с датами) **********************************************


new Date()
Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп (англ. timestamp).
Из таймстампа всегда можно получить дату с помощью new Date(timestamp) и преобразовать существующий объект Date в таймстамп, используя метод date.getTime() (см. ниже).

Датам до 1 января 1970 будут соответствовать отрицательные таймстампы, например:
// 31 декабря 1969 года
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

getTime()
Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.

** *** *** Установка компонентов даты
Следующие методы позволяют установить компоненты даты и времени:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)

Предположим, нам требуется увеличить дату «28 февраля 2016» на два дня. 
В зависимости от того, високосный это год или нет, результатом будет «2 марта» или «1 марта».
 Нам об этом думать не нужно. Просто прибавляем два дня. Объект Date позаботится об остальном:

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016

******** Получить дату по прошествии заданного отрезка времени. 
Например, получим дату «спустя 70 секунд с текущего момента»:

let date = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date ); // выводит правильную дату

*********
Date.now()
Если нужно просто измерить время, объект Date нам не нужен.

Существует особый метод Date.now(), возвращающий текущую метку времени.

Семантически он эквивалентен new Date().getTime(), однако метод не создаёт промежуточный объект Date. 
Так что этот способ работает быстрее и не нагружает сборщик мусора.

Данный метод используется из соображений удобства или когда важно быстродействие, 
например, при разработке игр на JavaScript или других специализированных приложений.

Вероятно, предыдущий пример лучше переписать так:

let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // заканчиваем отсчёт времени

alert( `Цикл отработал за ${end - start} миллисекунд` ); 
ВАЖНО: вычитаются числа, а не даты
//

******************************

Пример получение крайних точек времени события и вывод их разницы
let start = new Date();

for (let i = 0; i < 1000; i++) {
  console.log(i);
}
let end = new Date();
console.log(`Цикл отработал за ${end - start} милисекунд`);

Итого

Дата и время в JavaScript представлены объектом Date.
Нельзя создать «только дату» или «только время»: объекты Date всегда содержат и то, и другое.

Счёт месяцев начинается с нуля (да, январь – это нулевой месяц).

Дни недели в getDay() также отсчитываются с нуля, что соответствует воскресенью.

Объект Date самостоятельно корректируется при введении значений, выходящих за рамки допустимых. 
Это полезно для сложения/вычитания дней/месяцев/недель.

Даты можно вычитать, и разность возвращается в миллисекундах. Так происходит, 
потому что при преобразовании в число объект Date становится таймстампом.

Используйте Date.now() для быстрого получения текущего времени в формате таймстампа.


************************** МОДАЛЬНЫЕ ОКНА *****

Стандартные модальные окна
alert() - всплывающее обьявление
confirm() - позволяет сделать выбор и возвращает результат true or false
prompt() - получение данных от пользователя

открытие модалки. блокировка прокрутки страницы

 const modalTrigger = document.querySelectorAll('[data-modal]'), // все тригеры
    modal = document.querySelector('.modal'), // само окно
    modalCloseBtn = document.querySelector('[data-close]'); //крестик на модальном окне
  
function openModal() {
    modal.classList.add('show'); // данные класы включают и выключают видимость нашего элемента
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // блокировка прокрутки страницы во время открытого модального окна;
  }

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });


закрытие

function closeModal() { // закрытие окна вынесли в отдельную функцию, так как этот код
вызывается несколько раз в разных событиях
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // возобновление прокрутки страницы
  }

  modalCloseBtn.addEventListener('click', closeModal);

  // выключение модалки по клику на подложку

  modal.addEventListener('click', (event) => {
    if (event.target === modal) { // modal - наш элемент с модальным окном
      closeModal();
    }
  });

  // выключение модалки при нажатии ESC

  document.addEventListener('keydown', (event) => {// keydown - событие - "клавиша нажата"
    if (event.code === 'Escape' && modal.classList.contains('show')) {// .code - свойство event
      closeModal();
    }
  });

коды клавиатуры

https://keycode.info/

запуск модального при прокрутке по оси Y

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    // document.documentElement.scrollHeight - максимальная высота содержимого элемента
    // clientHeight - высота клиента (высота видимого диапазона страницы)
    // window.pageYOffset - позиция по оси Y
    openModal();
    window.removeEventListener('scroll', showModalByScroll); // убираем событие
  }
}

window.addEventListener('scroll', showModalByScroll);

всплытие модалки по времени

const modalTimerId = setInterval(openModal, 3000);


********************* Функции-конструкторы *****************

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
// этот метод станет доступным вссем объектам, которые сконструированные после того, как был объявлен этот метод
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


********************* THIS // КОНТЕКСТ ****************

Отличная подсказка к теме this:

Поскольку вызов функции имеет наибольшее влияние на this, отныне не спрашивайте:

Откуда берется this?

а спрашивайте: Как функция вызывается?

А в случае со стрелочной функцией спросите: Каков this там, где объявлена стрелочная функция?

Такой подход к this убережет вас от лишней головной боли.

Не путайтесь в контекстах!

/////////////////////////////////////////////////////////

// 1. Обычная функция (обычный вызов функции): this = window, но если включен use strict - undefined.
Всегда, когда функция просто вызывается (даже если она вызывается внутри другой функции
   или,что важнее внутри метода объекта) - this получает undefined or window.
Но если это вызывается стрелочная функция, то в this попадает родитель этой стрелочной функции.
Либо если родителя нет, то из глобальной видимости прилетает undefined or window.

// 2. Если мы используем this внутри метода, то он всегда содержит ссылку на сам обьект, в котором взван метод

// 3. This в конструкторах и классах - это ссылка на новый (только что созданый) экземпляр объекта

// 4. Ручная привязка this: call, apply, bind

Передача функции this вручную. Мы как бы говорим: 
Эй, функция, давай начинай работать вот именно с этим объектом и этим контекстом.

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

// методы call() и apply()

sayName.call(user, 'Smith'); // user - наш конткест, Smith - аргументы, которые мы добавляем
sayName.apply(user, ['Smith']); // в apply тоже самое, но аргументы передаются в виде массива
// Эти методы устаналивают контекст (ручное присвоение контекста) для функций. Сами функции при этом не вызываются

// метод bind создает НОВУЮ функцию и под нее уже подвязывает контекст

function count(num) {
    return this * num;
}
const double = count.bind(2);


// когда в обработчике события используется callback-функция в стандартном синтаксисе,
// то тогда this == сам элемент обработчика (event.target).
// если мы используем стрелочную функцию, то this ловит undefined or window
const bttn = document.querySelector('button');
bttn.addEventListener('click', function () {
    this.style.backgroundColor = 'red'; // перекоасит кнопку в крассный цвет
    console.log(this);
});

// у стрелочных функции нет своего контекста вызова, она всегда будет его искать у своего родителя

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this); // { num: 5, sayNumber: [Function: sayNumber] }
        };
        say();
    }
};
obj.sayNumber();

//некоторые нюансы синтаксиса стрелочных функций
// вариант первый
// const double = (a) => {
//     return a * 2;
// };

// упрощение
// const double = (a) => a * 2; или const double = a => a * 2;
*/

/*

****************************** CLASS ******************************

Классы - это более простой и понятный способ создания объектов и организации наследования.
Такой себе конструктор, который позволяет создать практически любой шаблон с разными
свойствами и методами.

// extends

Можно делать подклассы со своей кастомизацией. Для указания наследственности исползуется оператор extends

Есть также отличная штука: метод super()
Это конструктор для родительского класса. Он повторяет тот же набор свойств, что есть у родителя.
Иначе пришлось бы копипастить все свойства родителя
Главное правило в применении super() - он должен стоять в самом начале тела конструктора.
В скобках мы указываем какие свойства родителя мы хотим перенести в этот подкласс.
Дальше дописываем недостающие свойства

*/

class Rectangle {
  constructor(height, width) {
    this.height = height; // свойства, которые появятся в нашем новом экземпляре объекта
    this.width = width;
  }
  // метод
  calcArea() {
    return this.height * this.width;
  }
}
// создаем подкласс, который примет в сеья наследование Rectangle и позволит создать
// еще один шаблон, но уже уровенм пониже. Для указания на наследство от Rectangle
// мы используем
class ColoredRectangleWithText extends Rectangle {
  constructor(height, widht, text, bgColor) {
    super(height, widht); // конструктор для родительского класса.
    // он повторяет тот же набор свойств, что есть у родителя
    // иначе пришлось бы копипастить все свойства родителя
    // главное правило в применении super() - он должен стоять в самом начале тела конструктора.
    // В скобках мы указываем какие свойства родителя мы хотим перенести в этот подкласс.
    // Дальше дописываем недостающие свойства
    this.text = text;
    this.bgColor = bgColor;
  }
  // даный подкласс наследует от родителя все его методы. Добавим еще один
  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello Alex', 'blue');

div.showMyProps();
console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// ************************* Классический пример шаблонизации *******************

class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 27; // курс валюты
    this.changeToUAH(); // при запуске этого метода у новообразованного объекта
    // происходит присвоение аргументу price, уже видоизмененной отконвертированой цены
  }

  changeToUAH() {
    this.price = this.price * this.transfer;
  }

  render() { // генерация html для div, который разместим потом в родительском контейнере
    const element = document.createElement('div');
    element.innerHTML = `
          <div class="menu__item">
              <img src=${this.src} alt=${this.alt}>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
              </div>
          </div>
      `;
    this.parent.append(element);
  }
}


/*
создаем ноывый обьект и вызываем метод render()
возможный вариант действий:

const div = new MenuCard(); //нужные аргументы
div.render();

это стандартный способ, но можно и покороче: не ложить новый объект в переменную а вызвать его. 
Это при случае когда он вызывается один раз и дальше не учавствует в коде

new MenuCard().render();
*/
const div2 = new MenuCard( //нужные аргументы
  "img/tabs/vegy.jpg",
  "vegy",
  'Меню "Фитнес"',
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  9,
  '.menu .container'
);
div2.render();
const div3 = new MenuCard( //нужные аргументы
  "img/tabs/elite.jpg",
  "elite",
  'Меню “Премиум”',
  'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  10,
  '.menu .container'
);
div3.render();
const div4 = new MenuCard( //нужные аргументы
  "img/tabs/post.jpg",
  "post",
  'Меню "Постное"',
  'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  20,
  '.menu .container'
);
div4.render();