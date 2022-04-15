'use strict';

// function getData(url) {
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       return data;
//     });
// }

async function getData(url) {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('error happend');
  }
}

async function handleGetData(url) {
  const data = await getData(url);

  renderData(data);
}

function renderData(data) {
  document.body.append(data);
}

const state = {};
