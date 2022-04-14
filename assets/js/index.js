'use strict';

fetch('./assets/js/data.json')
  .then((response) => response.json())
  .then((data) => {
    state.users = data;
  })
  .catch((err) => {
    console.log('error happened');
  })
  .finally(() => {
    console.log('finally');
  });

const state = {};
