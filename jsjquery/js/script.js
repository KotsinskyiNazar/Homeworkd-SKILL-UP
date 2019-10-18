//task1
for(i=0;i<5;i++){
    $("<ul><li></li></ul>").appendTo(".container");
}
//task2
var coll = $(".container2").children();
i=0;
function ProgAddClass(){
    coll.eq(i).addClass('progress');
    i++;
}
function Load(){
    $('.title').text("Loaded!");
}
wrap1 = setInterval(ProgAddClass,1000);
txt = setTimeout(Load,4000);
