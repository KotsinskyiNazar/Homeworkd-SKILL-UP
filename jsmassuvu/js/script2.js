alert('task3');
var loremtext = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi nesciunt quo cupiditate natus id corporis repudiandae fugit architecto, repellat dolores aut quia porro ad sit culpa quibusdam labore iusto assumenda";
var arr2 = loremtext.split(' ');
console.log(arr2);
for(var i in arr2){
    var word=arr2[i];  
    if(word.length>=8){     
        console.log('word',i,':',word);
    }
}