alert("task7");
var arr6=[8,6,12,10];
var kvadrat=arr6.map(Square);
console.log(kvadrat);
function Square(item){
    var Mult=item*item;
    return Mult;
}
