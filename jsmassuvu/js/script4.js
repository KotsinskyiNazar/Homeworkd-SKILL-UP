// task5
alert('task5');
var arr4 = new Array;
var number = parseInt(prompt("enter size of massive"));
var choose=prompt("if you want fill random press cancell,manualy press enter");
addnumber();
checking();
function randomNumber(){
    random = Math.round( Math.random() * 100 );
    return random;
}
function addnumber(){
    if(choose == null){
            for(i=0;i<number;i++){
                arr4[i] = randomNumber();
            }
    }else{
        for(i=0;i<number;i++){
            arr4[i]=prompt('Input number!','');
        }
    }
    console.log(arr4); 
}
function checking(){
    audit=arr4[0];
    var bool=typeof(audit);
        if(bool=="number"){
            console.log('All numbers are random!');
        }else{
            console.log('All numbers was entered through prompt!')
        }
}