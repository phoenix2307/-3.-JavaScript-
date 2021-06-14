// Работа с classList - список классов элемента


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

wrapper.addEventListener('click', (event) => { //задаем условие для того, чтобы событие срабатывало только при клике по button
  if (event.target && event.target.matches('button.red')) {
    console.log('Hello');
  }
});



const btn = document.createElement('button'); // создать новую кнопку
btn.classList.add('red'); // Присвоить необходимый класс элементу
wrapper.append(btn); // добавить элемент на страницу