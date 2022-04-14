'use strict';

console.log(1);
const myPromise = new Promise((resolve, reject) => {
  console.log(2);
  resolve(4);
});
console.log(3);

myPromise.then((number) => console.log(number));

console.log(58);
