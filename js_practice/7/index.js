'use strict'

let addButton = document.getElementById('addRowAndColumnButton');

addButton.addEventListener('click', function () {
    let table = document.querySelector('#table');
    let trs = document.querySelectorAll('#table tr');

    let newRow = document.createElement('tr');

    for (let i = 0; i < trs[0].children.length + 1; i++) {
        let td = document.createElement('td');
        newRow.appendChild(td);
    }

    table.appendChild(newRow);

    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
});