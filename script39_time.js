// setTimeout не обязательно помещать в переменную, она и так будет работать.
// но в случае переменной в переменную мы получаем числовой идентификатор этого таймера
const timerId = setTimeout(function (text) {
  console.log(text);
  console.log(timerId);
}, 2000, 'Goodbuy');
//синтаксис такой, что сначала она (setTimeout) принимает ту функцию (function()),
//которая должна запуститься через определенный промежуток времени
//Причем она принимает именно обьявление этой функции или ее название
//но при этом ф-ция сразу не запускается, а вызовется только через время, которые задается вторым аргументом в мс
//третий аргумент - это знв=ачения для аргумента function, которая вызывается

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  // const timerTwo = setTimeout(logger, 3000);
  const timerTwo = setInterval(logger, 3000); // выполняет функцию через каждые 3000мс
});

clearInterval(timerTwo); // останавливает таймер с идетификатором timerTwo

function logger() {
  console.log('some text');
  console.log(timerTwo);
}