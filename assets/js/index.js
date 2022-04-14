'use strict';

const user = {
  name: 'Ivanko',
  lastName: 'Sirko',
  age: 20,
  email: 'ivsri@gmail.com',
  func: () => {},
  address: {
    city: 'ZP',
  },
};

const serializedUser = JSON.stringify(user); // сериализация данных

console.log(serializedUser);

const deserializedUser = JSON.parse(`${serializedUser}`); // десериализация данных
const user2 = user;
user2.address.city = 'Kyiv';

console.log(deserializedUser);
