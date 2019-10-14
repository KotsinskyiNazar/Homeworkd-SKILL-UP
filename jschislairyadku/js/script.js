//first task
console.log("randomn even/not even");
  var max = Math.floor(prompt("max number"));
console.log("max number = ",max);
  var min = Math.ceil(prompt("min number"));
console.log("min number = ",min);
if(max<min)alert("min number is biger than max"), alert("min set to default = 1"),min = 1,console.log("min number = ",min);
  var random =Math.floor(Math.random() * (max - min + 1)) + min;
alert("Your random number is = "+random);
console.log("your random number is = ",random);
  var np = (random%2==0) ? alert("random number are even number"):alert("random number  are not an even number") ;
//second task
alert("open console please");
console.log("second task");
var arr = ['Lorem', 'ipsum', 'Is', 'simply', 'Dummy'];
console.log(arr)

var Arr='';
for (i=0; i<arr.length; i++){
    if(arr[i][0]== arr[i][0].toUpperCase()){
      Arr=Arr.concat(' ',arr[i]); 
    }
}
console.log('обєднані в строку слова в якій кожне слово з великої літери');
console.log(Arr);
//third task
var text1 = prompt('Enter some text!');
console.log('First text:',text1);
var text2 = prompt('Enter some text!');
console.log('Second text:',text2);

var status1 = (text1>text2), status2 = (text1<text2);
result = status1 ? text1 : status2 ? text2 : 'Strings are equal!';
console.log('Larger text:',result);
    



