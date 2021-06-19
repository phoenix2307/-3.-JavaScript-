const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;

// btn.addEventListener('click', () => {
//   // timerId = setTimeout(logger, 1000);
//   timerId = setInterval(logger, 500);
// });

// function logger() { // отслеживаем сколько раз повторился интервал
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('some text');
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log('Hello Alex');
//   id = setTimeout(log, 500);
// }, 500);

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

const now = new Date();
console.log(now);

// Методы даты

console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());

let start = new Date();

for (let i = 0; i < 1000; i++) {
  console.log(i);
}
let end = new Date();
// alert(`Цикл отработал за ${end - start} милисекунд`);
console.log(`Цикл отработал за ${end - start} милисекунд`);

let time = new Date(1000000);
console.log(time);