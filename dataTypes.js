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

//constructing strings with variables
var str2 = "Sameera";
var str3 = "My name is " + str2 +" and I am well."
console.log(str3)

//Appending variables to string
var adjective = "worthwhile";
var str4 = "Learning to code is ";
str4 += adjective
console.log(str4)

//Finding length of string
var firstNameLength = 0;
var firstName = "Sameera";
firstNameLength = firstName.length;
console.log(firstNameLength)

//Bracket notation to find first character in string
var firstLetterOfFirstName = "";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)

//String Imutability
var str = "Jello World";
str[0] = "H";
console.log(str) // not changed the out put because we must need to change like this
str = "Hello World"
console.log(str) // then output is changed

//Find last letter of a string
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName)
//Also we can find N th to last character in string

//WordBlank
function wordBlanks(myNoun,myAdjective,myVerb,myAdverb) {
    var result ="";
    result += "The " + myAdjective +" "+ myNoun+" " + myVerb + " to the store "+ myAdverb+".";

   return result; 
}
console.log(wordBlanks("dog","big","ran","quickly"));

