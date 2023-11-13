'use strict'

    let doubleButton = document.getElementById('doubleNumbersButton');

        doubleButton.addEventListener('click', function () {

    let tds = document.querySelectorAll('#table td');

    for (let td of tds) {
      td.textContent = parseInt(td.textContent, 10) * 2;
    }
  });