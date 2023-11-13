'use strict'

let table = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.textContent = 'x';
    tr.appendChild(td);
  }
  
  table.appendChild(tr);
}

function generateTable() {
    let rows = document.getElementById('rows').value;
    let cols = document.getElementById('cols').value;

    let generatedTable = document.querySelector('#generatedTable');

    for (let i = 0; i < rows; i++) {
      let tr = document.createElement('tr');
      
      for (let j = 0; j < cols; j++) {
        let td = document.createElement('td');
        td.textContent = 'x';
        tr.appendChild(td);
      }
      
      generatedTable.appendChild(tr);
    }
  }

