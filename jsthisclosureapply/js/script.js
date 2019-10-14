// //task1
// var namevalue = function(name){
//     var getName = function(){
//         return name;
//     }
//     return getName;
// }
// var inputName = prompt('Input your name!', '');
// myName = namevalue(inputName);
// console.log(myName());
// //task2
// var calculator = {
//     add() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     info() {
//         this.a = +prompt("VALUE 1");
//         this.b = +prompt("VALUE 2");
//     }
// }
// calculator.info();
// alert("ADDED VALUES = " + calculator.add());
// alert("mULTYPLYING VALUES = " + calculator.mul());
// //task3
// function Calculator(c,d){
//     this.c=c;
//     this.d=d;
//     this.mult = function(){    
//         mul=this.c*this.d
//         return mul;
//     };
//     this.suma = function(){    
//         sum=this.c+this.d
//         return sum;
//     };
// }
// num1=+prompt("value 1",'');
// num2=+prompt("value 2",'');
// var calc = new Calculator(num1,num2);
// console.log('added',calc.suma());
// console.log('multyplying',calc.mult());
//task4

var value1 =  function appointment1() { 
    num1=document.getElementById('value_1').value;
    number1 = num1
    return number1;
}
var value2 =  function appointment2() { 
    num2=document.getElementById('value_2').value;
    number2 = num2
    return number2;
}
function sum(){
    suma = parseInt(this.value1()) + parseInt(this.value2());
    document.getElementById('res1').value=suma;
}
function multyplying(){
    mult = parseInt(this.value1()) * parseInt(this.value2());
    document.getElementById('res2').value=mult;
}