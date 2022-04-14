'use strict';

fetch('./assets/js/data.json')
  .then(
    (response) => response.json(),
    (error) => {
      console.log('error on server');
    }
  )
  .then(
    (data) => {
      state.users = data;
    },
    (error) => {
      console.log('error while parsing');
    }
  );

const state = {};
