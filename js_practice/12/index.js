'use strict'

let elem = document.querySelector('#elem');
    let input = document.querySelector('#input');

    input.value = elem.textContent;

    input.addEventListener('input', function () {
        elem.textContent = this.value;
});

let elemm = document.querySelector('#elem');

    elemm.addEventListener('click', function () {
        let input = document.createElement('input');
        input.value = elemm.textContent;

    input.addEventListener('blur', function () {
        elemm.textContent = this.value;
        this.remove(); 
    });

    elemm.parentElement.appendChild(input);
});