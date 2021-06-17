// classList МЕТОДЫ

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

// ДЕЛЕГИРОВАНИЕ //
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
////////////////////////////////// TimeOut // Анимация //////////////////////
//

const timerId = setTimeout(function (text) {
  console.log(text);
}, 2000, 'Goodbuy');
/* синтаксис такой, что сначала она (setTimeout) принимает ту функцию (function()),
//которая должна запуститься через определенный промежуток времени
//Причем она принимает именно обьявление этой функции или ее название
//но при этом ф-ция сразу не запускается, а вызовется только через время, которые задается вторым аргументом в мс
*/
clearInterval(timerTwo); // останавливает таймер с идетификатором timerTwo
setInterval(logger, 3000); // выполняет функцию через каждые 3000мс.
// Если его не остановить, то работать будет до последнего