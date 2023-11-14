'use strict'

let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];

let myList = document.querySelector("#myList");
let newItem = document.querySelector("#newItem");
let addItem = document.querySelector("#addItem");

let myTable = document.querySelector("#myTable");
let newName = document.querySelector("#newName");
let newAge = document.querySelector("#newAge");
let newSalary = document.querySelector("#newSalary");
let addEmployee = document.querySelector("#addEmployee");

employees.forEach(function(employee) {
    addListItem(employee.name);
    addTableRow(employee);
});

addItem.addEventListener('click', function() {
    addListItem(newItem.value);
    newItem.value = '';
});

addEmployee.addEventListener('click', function() {
    let employee = {name: newName.value, age: newAge.value, salary: newSalary.value};
    addTableRow(employee);
    newName.value = '';
    newAge.value = '';
    newSalary.value = '';
});

function addListItem(text) {
    let li = document.createElement('li');
    li.textContent = text;
    myList.appendChild(li);

    li.addEventListener('click', function() {
        let input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        this.appendChild(input);
        input.focus();

        input.addEventListener('blur', function() {
            this.parentNode.textContent = this.value;
        });
    });

    let a = document.createElement('a');
    a.textContent = " Удалить";
    a.onclick = function(e) {
        e.preventDefault();
        this.parentNode.remove();
    }
    li.appendChild(a);
}

function addTableRow(employee) {
    let tr = document.createElement('tr');
    myTable.appendChild(tr);

    let tdName = document.createElement('td');
    tdName.textContent = employee.name;
    tr.appendChild(tdName);

    let tdAge = document.createElement('td');
    tdAge.textContent = employee.age;
    tr.appendChild(tdAge);

    let tdSalary = document.createElement('td');
    tdSalary.textContent = employee.salary;
    tr.appendChild(tdSalary);

    let tdDelete = document.createElement('td');
    let aDelete = document.createElement('a');
    aDelete.textContent = "Удалить";
    aDelete.onclick = function(e) {
        e.preventDefault();
        this.parentNode.parentNode.remove();
    }
    tdDelete.appendChild(aDelete);
    tr.appendChild(tdDelete);

    [tdName, tdAge, tdSalary].forEach(function(td) {
        td.addEventListener('click', function() {
            let input = document.createElement('input');
            input.value = this.textContent;
            this.textContent = '';
            this.appendChild(input);
            input.focus();

            input.addEventListener('blur', function() {
                this.parentNode.textContent = this.value;
            });
        });
    });
}