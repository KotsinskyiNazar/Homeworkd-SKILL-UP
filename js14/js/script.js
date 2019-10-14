result =  prompt("ENTER YOUR VALUE");
alert("You entered "+result);
if(result>0){
    alert("true");
    console.log(result);
}
else if(result<0){
    alert("false");
    console.log(result);
}
else if(result==0)
{
    alert("Its zero");
    console.log(result);
}
else{
    alert("i didnt know that number");
    console.log(result);
}

var enterpoint = prompt("enter yout number!");
switch(enterpoint){
    case "1":
        alert("a");
        break;
    case "2":
        alert("b");
        break;
    case "3":
        alert("c");
        break;
    default:
        alert("z");
}

for(i=1;i<=9;i++){
    res=i*i
    console.log(res);
}
console.log("with while");


var x = 1;

while(x<=9){
    res2=x*x;
    x++;
console.log(res2);


}

console.log("Теренарний орператор if/else")
var n = a = 1  > 0 ? "TRUE" : "FALSE";
alert(n);
console.log(n);