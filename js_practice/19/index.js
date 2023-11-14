'use strict'

let li = document.querySelectorAll("#myList1 li");

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function() {
        this.style.backgroundColor = "red";
    });
}

let lil2 = document.querySelectorAll("#myList2 li");

for (let i = 0; i < lil2.length; i++) {
    lil2[i].addEventListener('click', function() {
        if (this.style.backgroundColor == "red") {
            this.style.backgroundColor = "";
        } else {
            this.style.backgroundColor = "red";
        }
    });
}
