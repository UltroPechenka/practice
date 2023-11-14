'use strict'

let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let elem = document.querySelector('#' + this.dataset.elem);
        elem.classList.toggle('hidden');
    });
}

// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
//
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         elems[i].classList.toggle('hidden');
//     });
// }

// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         this.previousElementSibling.classList.toggle('hidden');
//     });
// }