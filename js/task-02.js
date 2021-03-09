'use strict'

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const liItem = document.querySelector('#ingredients')

// const liCreator = ingredients.map(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     return li;
// });

// liItem.prepend(...liCreator)

ingredients.forEach(el => {
    const liCreator = document.createElement('li')
    const list = document.querySelector('#ingredients')
    liCreator.textContent = el
    list.appendChild(liCreator)
  }
  )