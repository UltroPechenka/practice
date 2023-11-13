'use strict'

let listItems = document.querySelectorAll('#myList li');

    for (let listItem of listItems) {
        let removeLink = document.createElement('a');
        removeLink.href = '#';
        removeLink.textContent = 'remove';
    
        listItem.appendChild(removeLink);

    removeLink.addEventListener('click', function (event) {
        listItem.remove();
        event.preventDefault();
    });
}

let tableRows = document.querySelectorAll('#myTable tr');

    for (let row of tableRows) {
        let removeLink = document.createElement('a');
        removeLink.href = '#';
        removeLink.textContent = 'remove';
    
        let cell = document.createElement('td');
        cell.appendChild(removeLink);
        row.appendChild(cell);

    removeLink.addEventListener('click', function (event) {
        row.remove();
        event.preventDefault();
    });
}