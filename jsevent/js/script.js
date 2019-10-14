//task1
function sbmt() {
    var input = document.getElementById('area').value;
    console.log(input)
}
//task2
var elem = document.getElementById('element');
window.addEventListener('click', function Replace() {
    elem.style.left = (this.event.clientX - elem.clientWidth / 2) + 'px';
    elem.style.top = (this.event.clientY - elem.clientHeight / 2) + 'px';
});
//task3
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//task4
table.onmouseover = function (event) {
    var target = event.target;
    target.style.background = 'pink';
}
table.onmouseout = function (event) {
    var target = event.target;
    target.style.background = '';
}
//task5
window.addEventListener('scroll', function (e) {
    if (this.scrollY > 200) {
        var box = document.getElementById('head');
        box.style.background = 'red';

    }
    if (this.scrollY < 200) {
        var box = document.getElementById('head');
        box.style.background = 'green';
    }
    console.log(this.scrollY)
});
//task6
window.addEventListener('resize', function () {
    var x = window.innerWidth;
    var elem = document.getElementById('box');
    if (x < 768) {
        elem.classList.add("newClass");
    } else if (x >= 768) {
        elem.classList.remove("newClass");
    }
    console.log(elem);
});
//task7
function Filter() {
    var inptValue = parseInt(document.querySelector('#inpt').value);
    if (inptValue > 47 && inptValue < 58) {
        alert('succes');
    } else if (inptValue > 95 && inptValue < 106) {
        alert('succes');
    } else {
        alert('failed');
    }
}

