//Iterate with while loop
var myArry = [];
var i =0;
while(i<5){
    myArry.push(i);
    i++
}
console.log(myArry);

//Iterate with for loop
var myArr = [];
for(var i =1; i<10; i +=2){
    myArr.push(i);
}
console.log(myArr)
//iterate odd,even numbers with the for loop
//Count backword with the for loop
var myArr = [];
for(var i =10; i>0; i -=2){
    myArr.push(i);
}
console.log(myArr)

//Nested for loops
function multiplyAll(arr){
    var product = 1;

    for (var i=0; i<arr.length;i++){
        for(var j=0;j < arr[i].length; j++){
            product  *= arr[i][j]; 
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product)

//do while loop 
var myArry = [];
var i =0;
do{
    myArry.push(i);
    i++
}while(i<5)
console.log(myArry);