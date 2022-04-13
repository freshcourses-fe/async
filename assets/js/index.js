'use strict';

console.log('start');

// setTimeout - одноразовый тамер
const timeout1Id = setTimeout(() => {
  console.log('timeout');
}, 300);
setTimeout(() => {
  console.log('timeout 2');
}, 300);
// for (let i = 0; i < 500000000; i++) {}
setTimeout(() => {
  console.log('timeout 1');
}, 300);
// setInterval - многоразовый таймер
const interval1Id = setInterval((x) => {
  console.log('interval');
  console.log(x);
}, 2000, 'test');


// clearInterval(4);

console.log('end');
