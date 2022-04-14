'use strict';

const response = fetch('./assets/js/data.json')
  .then((response) => response.json())
  .then((data) => {
    state.users = data;
  });

const state = {};
