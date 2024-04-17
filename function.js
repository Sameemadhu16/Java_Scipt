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
