'use strict'

let parent = document.querySelector('#parent');
let button = document.getElementById('button');

    button.addEventListener('click', function () {

let newLi = document.createElement('li');

        newLi.textContent = 'New Item';

        newLi.addEventListener('click', function () {
        this.remove();
        });

    parent.appendChild(newLi);
    });

    parent.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
        event.target.remove();
        }
    });