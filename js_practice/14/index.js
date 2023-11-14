'use strict'

let li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function() {
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

let td = document.querySelectorAll("td");

for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', function() {
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

