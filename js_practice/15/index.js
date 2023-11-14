'use strict'

let p = document.querySelectorAll("#parent1 p");

for (let i = 0; i < p.length; i++) {
    let a = document.createElement('a');
    a.textContent = " Удалить";
    a.onclick = function(e) {
        e.preventDefault();
        this.parentNode.remove();
    }
    p[i].appendChild(a);

    let span = p[i].querySelector("span");
    span.addEventListener('click', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            this.parentNode.textContent = this.value;
        });
    });
}

let p2 = document.querySelectorAll("#parent2 p");

for (let i = 0; i < p.length; i++) {
    let span = document.createElement('span');
    span.textContent = p2[i].textContent;
    p2[i].textContent = '';
    p2[i].appendChild(span);

    let a = document.createElement('a');
    a.textContent = " Удалить";
    a.onclick = function(e) {
        e.preventDefault();
        this.parentNode.remove();
    }
    p2[i].appendChild(a);

    span.addEventListener('click', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            this.parentNode.textContent = this.value;
        });
    });
}