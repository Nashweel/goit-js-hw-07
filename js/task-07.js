'use strict'

const rangeRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

// textRef.style.fontSize = `${rangeRef.value}px`


// rangeRef.addEventListener('input', onInputRange)

// function onInputRange() {
//     textRef.style.fontSize = `${rangeRef.value}px`
// }

rangeRef.addEventListener('input', () => {
    textRef.style.fontSize = `${rangeRef.value}px`;
} )