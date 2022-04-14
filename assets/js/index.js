'use strict';

console.log(1);
const myPromise = Promise.resolve(4);
const myErrorPromise = Promise.reject(5);
console.log(3);

myPromise.then((number) => console.log(number));

myErrorPromise.catch((err) => console.error(err));

console.log(58);
