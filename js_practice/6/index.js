'use strict'

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
  ];

  let table = document.getElementById('table');

  for (let employee of employees) {
    let tr = document.createElement('tr');

    for (let key in employee) {
      let td = document.createElement('td');
      td.textContent = employee[key];
      
      if (key === 'salary') {
        td.addEventListener('click', function () {
          td.textContent = parseFloat(td.textContent) * 1.1; 
        });
      }

      if (key === 'age') {
        td.addEventListener('click', function () {
          td.textContent = parseInt(td.textContent) + 1;
        });
      }

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }