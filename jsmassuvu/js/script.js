//task1
alert("task1");
task1();
function task1() {
    var arr1 = new Array();
    var input = prompt('Enter number');
    arr1.push(input);
    if (input === null) {
        alert('NONE NUMBER ENTERED');
    }else{
        for(i=0;i<100;++i){
            input = prompt('Enter number');
            if (input === null) {
                console.log('', arr1.length);
                break;
            }else{
            arr1.push(input);
            }   
        }
    }
    console.log(arr1); 
}
alert("open console");
