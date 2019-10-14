// task6
alert("task6");
var textlorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi nesciunt quo cupiditate natus id corporis repudiandae fugit architecto, repellat dolores aut quia porro ad sit culpa quibusdam labore iusto assumenda";
var arr5 = textlorem.split(' ');
console.log(arr5);
var lgth = 0;
var longest;

for(var i=0; i < arr5.length; i++){
    if(arr5[i].length > lgth){
        var lgth = arr5[i].length;
        longest = arr5[i];
    }      
} 
console.log(longest);