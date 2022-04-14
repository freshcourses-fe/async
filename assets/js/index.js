'use strict';

const response = fetch('./assets/js/data.json');

// console.log(response);
const jsonResponse = response.then((response) => response.json());

jsonResponse.then((data) => {
  console.log(data);
  
});
// jsonResponse.then((data) => {
//   console.log(data);
// });
