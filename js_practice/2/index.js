'use strict'

let ul = document.getElementById('elem');
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let li = document.createElement('li');
    li.textContent = elem;
    ul.appendChild(li);
}

ul.addEventListener('click', function(event) {
    let target = event.target;

    if (target.tagName === 'LI' && !target.clicked) {
        target.textContent += '!';
        target.clicked = true;
    }
});

