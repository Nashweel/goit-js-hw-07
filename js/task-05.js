'use strict'

const onInputName = document.querySelector('#name-input')
const onOutputName = document.querySelector('#name-output')

onInputName.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value)
    onInputName.value === ''
        ? onOutputName.textContent = 'незнакомец'
        : onOutputName.textContent = onInputName.value
}