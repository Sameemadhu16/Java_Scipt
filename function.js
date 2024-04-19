//write reusable code eith functions
function ourReusableFunction(){
    console.log("Hello World");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

//Passing value to function with arguments
function ourFunctionWithArgs(a ,b){
    console.log(a -b);
}
ourFunctionWithArgs(10,5);
ourFunctionWithArgs(20,5);

//Global scope and functions
var myGlobal = 10;
function fun1(){
      oopsGlobal = 20;//if use var keyword then the varible can be acces only in the scope
}
function fun2(){
    var output = "",output1="";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal
        console.log(output)
    }
    if(typeof oopsGlobal != "undefined"){
        output1 += "oopsGlobal: "+ oopsGlobal;
        console.log(output1)     
    }
}
fun1();
fun2();

//Local scope and functions
function myLocalScope(){
    var myVar = 5; //myVar is visibly only in this scope
    console.log(myVar);
}
myLocalScope();
//console.log(myVar);  cannot visible myVar in global scope


//Global vs Local scope in function
var outerWear = "T-shirt";
function myOutfit(){
    var outerWear = "Shirt";
    return outerWear;
}
console.log(myOutfit()) //LOacl scope variable
console.log(outerWear) //Global scope variable

//Return a value from a function with return
function minusFive(num){
    return num - 5;
}
console.log(minusFive(20));
console.log(minusFive(56));

//Understandin undefined value returned from a function

//Assignment with a return value
var changed = 0;
function change(num){
    return (num * 5)/2;
}
changed = change(20);
console.log(changed)

//Stand in line
function nextInLine(arr , item){
    arr.push(item); // push item in the end
    return arr.shift(); //pop element of the begining
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr , 6));
console.log("After: " + JSON.stringify(testArr));

