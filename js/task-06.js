'use strict'
// const validationInput = document.querySelector('#validation-input')


// function onInputBlur() {
//     console.log(validationInput.value.length)

//     validationInput.value.length === Number(validationInput.getAttribute('data-length'))

//         ? validationInput.classList.add('valid')
//         : validationInput.classList.add('invalid')
// }

// function onInputFocus() {
//     validationInput.classList.remove('valid')
//     validationInput.classList.remove('invalid')
// }

// validationInput.addEventListener('blur', onInputBlur)
// validationInput.addEventListener('focus', onInputFocus)

const validationInput = document.querySelector('#validation-input')
const input = Number(validationInput.getAttribute('data-length'))

function onInputBlur () {

    if (validationInput.value.length === input) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
} 
validationInput.addEventListener('blur', onInputBlur)
// validationInput.addEventListener('focus', onInputFocus)