'use strict'

const ref = {
 btnMinus: document.querySelector('[data-action="decrement"]'),
 count: document.querySelector('#value'),
 btnPlus: document.querySelector('[data-action="increment"]')
};

ref.btnMinus.addEventListener('click', onBtnMinusClick)
ref.btnPlus.addEventListener('click', onBtnPlusClick)

let counterValue = 0;

function onBtnMinusClick() {
    counterValue -= 1
    ref.count.textContent = counterValue;
}

function onBtnPlusClick() {
    counterValue += 1
    ref.count.textContent = counterValue;
}