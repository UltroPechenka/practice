'use strict'

let elem = document.querySelector('#eleme');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click', function() {
    if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
    } else {
        elem.classList.add('hidden');
    }
});

