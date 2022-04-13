'use strict';

/*
Можно решить через 
Создать функции которые последовательно выводят в консоль числа от 1 до 20 с интервалом в 100 мс.
- setInterval - if, clearInterval
- setTimeout - рекурсия с if
*/
function intervalCounter() {
  console.time('interval timer');
  let i = 1;

  const id = setInterval(() => {
    console.log(i++);
    if (i > 20) {
      clearInterval(id);
      console.timeEnd('interval timer');
    }
  }, 100);
}

intervalCounter();

function timeoutConter(i = 0) {
  console.log(i++);
  if (i <= 20) {
    setTimeout(() => {
      timeoutConter(i);
    }, 100);
  } else {
    console.timeEnd('timeout timer');
  }
}

console.time('timeout timer');
timeoutConter();
