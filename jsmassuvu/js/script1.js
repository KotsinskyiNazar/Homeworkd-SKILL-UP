alert('task2');
var mas=new Array();
var n=parseInt(prompt('Еnter the number of rows','')), m=parseInt(prompt('Еnter the number of columns','')), res=0,
mult=0;
function task2(){
    for(i=0;i<n;i++){
      mas[i]=new Array();
    }
    for(i=0;i<n;i++){
      for(j=0;j<m;j++){
        mas[i][j]=prompt('Input number of matrix:', ''); 
        res+=parseInt(mas[i][j]);
        }
      }
    console.log('Maasive:',mas);
    console.log('The sum of the array:',res);
  }
if(m==n){
task2();
}else{
    alert('The matrix is ​​not square!');
}