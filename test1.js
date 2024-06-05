//Golf code
var names = ["Hole-in-one","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"]
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0];
    }else if(strokes <= par -2){
        return names[1];
    }else if(strokes <= par -1){
        return names[2];
    }else if(strokes <= par){
        return names[3];
    }else if(strokes <= par +1){
        return names[4];
    }else if(strokes <= par +2){
        return names[5];
    }else if(strokes <= par +3){
        return names[6];
    }
}
console.log(golfScore(5,8))

//Returning boolean values from Functions
function isLess(a,b){
    return a<b;
}
console.log(isLess(30,60));
console.log(isLess(40,20));

//Returning early pattern from functions

//Generate random fractions
//Genarate random whole numaber
function randomWholeNum(){
    return Math.floor(Math.random()*100);
}
console.log(randomWholeNum())

//Generate random whole number within a range
function randomRange(myMin,myMax){
    return Math.floor(Math.random()* (myMax - myMin + 1)) + myMin
}
var myRandom = randomRange(5,15);
console.log(myRandom)

//Use the parseInt function
function convertToInteger(str){
    return parseInt(str , 2);
}
console.log(convertToInteger("10011"))

//Use multiple conditional operator(ternary)
function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(10))
console.log(checkSign(0))
console.log(checkSign(-10))

//Difference between var and let keywords
//var is gobal scope and let is local scope 
//In let cannont define same variable name in more than one in the scope
function checkScope(){
    "use strict";
    let i = "function scope";
    if(true){
        let i ="block scope";
        console.log("block scope i is: ",i);
    }
    console.log("Function scope i is:",i);
}
checkScope();

//Declare a read only variable with the const keyword
//IF ypu declare a varible with the const keyword you cannot reassign it afterwards
//const are in capital letters
function printManyTimes(str){
    "use strict";
    const SENTENCE = str + " is cool";
    for(let i = 0; i<str.length; i+=2){
        console.log(SENTENCE);
    }
}
printManyTimes("Sameera_Mdhuranga")

//Mutate and array declare with const
const s = [5,7,3];
function editInPlace(){
    "use strict";
    //s = [2,4,6];
    s[0] = 2;
    s[1] = 4;
    s[2] = 6;
}
editInPlace();
console.log(s)

//Prevent object mutation
