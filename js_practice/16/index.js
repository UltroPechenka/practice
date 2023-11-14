'use strict'

let p = document.querySelectorAll("p");

for (let i = 0; i < p.length; i++) {
    let a = document.createElement('a');
    a.textContent = " Перечеркнуть";
    a.onclick = function(e) {
        e.preventDefault();
        this.previousSibling.style.textDecoration = "line-through";
    }
    p[i].appendChild(a);
}

let p1 = document.querySelectorAll("p");

for (let i = 0; i < p1.length; i++) {
    let a = document.createElement('a');
    a.textContent = " Перечеркнуть";
    a.onclick = function(e) {
        e.preventDefault();
        this.previousSibling.style.textDecoration = "line-through";
        this.remove();
    }
    p1[i].appendChild(a);
}

let tr = document.querySelectorAll("#myTable tr");

let th = document.createElement('th');
th.textContent = "Сделать зеленым";
tr[0].appendChild(th);

for (let i = 1; i < tr.length; i++) {
    let td = document.createElement('td');
    let a = document.createElement('a');
    a.textContent = "Сделать зеленым";
    a.onclick = function(e) {
        e.preventDefault();
        this.parentNode.parentNode.style.backgroundColor = "green";
    }
    td.appendChild(a);
    tr[i].appendChild(td);
}

let tr1 = document.querySelectorAll("#myTable1 tr");

let th1 = document.createElement('th');
th1.textContent = "Сделать зеленым";
tr1[0].appendChild(th);

for (let i = 1; i < tr1.length; i++) {
    let td = document.createElement('td');
    let a = document.createElement('a');
    a.textContent = "Сделать зеленым";
    a.onclick = function(e) {
        e.preventDefault();
        if (this.parentNode.parentNode.style.backgroundColor == "green") {
            this.parentNode.parentNode.style.backgroundColor = "";
        } else {
            this.parentNode.parentNode.style.backgroundColor = "green";
        }
    }
    td.appendChild(a);
    tr1[i].appendChild(td);
}