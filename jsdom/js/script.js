//task1
console.log(document.getElementById('list'));
console.log(document.getElementById('list').lastElementChild.innerHTML);
//task2
console.log(document.getElementsByClassName('list1'));
document.getElementsByClassName('list1').innerHTML = 'nazar'; 
document.body.style.color = 'red';
//task3
var text;
for(i=3;i<=7;i++){
    var NewLi = document.createElement('li');
    text=i;
    NewLi.innerHTML = text;
    list.appendChild(NewLi);    
}
console.log(document.getElementsByClassName('list'));
