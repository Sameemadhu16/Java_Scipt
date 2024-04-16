/* Data Types:
undefined,null, boolean, string,symbol.number,and object
*/

var myName = "sameera" //going on whole program
myName = 8  //can change

let ourName = "RAD_Members" //withing the scope

const pi = 3.14 //shold never change
//pi = 3      give error

//Assignment Operator
var a;
var b = 5;
console.log(a)
console.log(b)

a = 4;
console.log(a)
console.log(b)

b = a;
console.log(a)
console.log(b)

//case sencitive
//also can increment and decrement
var myVar = 50;
myVar++;
console.log(myVar)

myVar--;
console.log(myVar)

//quatation mark inside the string
var myStr ="I am a \"double quated\" string inside \"double quates\""
console.log(myStr)
//sigle quatation also can used

//Escape sequence
/* 
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

//concatanatimg string with plus operator
var ourStr = "My name is " + "Sameera Madhuranga."
console.log(ourStr)

// concatanating strings with plus equal operator
var str1 = "I come first.";
str1 += " I come second.";
console.log(str1) 