'use strict' 

const categoriesCounter = document.querySelectorAll('.item')
console.log(`В списке ${categoriesCounter.length} категории.`)

const nameCounter = document.querySelectorAll('.item > h2')
nameCounter.forEach(el => console.log(`Категория: ${el.textContent}\nКоличество элементов: ${el.nextElementSibling.children.length}`)) 

// const categoriesCounter = document.querySelector('#categories')
// console.log(`В списке ${categories.children.length} категории.`)

// categoriesCounter.querySelectorAll('.item').forEach(item => {
// console.log(`Категория: ${item.querySelector('h2').textContent}\nКоличество элементов: ${item.querySelector('ul').children.length}`)
// })