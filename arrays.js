//store mulitiple values with arrays
var array = ["sameera", 16, 12.67];
console.log(array)

//Nested arrays(array in the array)
var ourArray = [["sameera",45],["madhuranga", 67]];
console.log(ourArray)

//Access Array data with indexes
var arry = [45,78,9,435];
var mydata = arry[1];
console.log(mydata)

//Modify array data with indexes
arry[2] = 56;
console.log(arry)

//Access multi-dimensional arrays with indexes
var myArray = [[1,4,56],[45,89,6], 89, [34,8]];
mydata = myArray[1][1];
console.log(mydata)

//Multiple Array with push()
var ourArray = ["Sameera","Amaya","Sachith","Ashan"];
ourArray.push("Shashika","Jayathu");
console.log(ourArray) //Add elements to the end of the array

//Multiple Arrays with pop()
var myArray = [12,45,78];
myArray.pop();
console.log(myArray) //delete last element of the array

//Multiple arrays with shift()
var ourArray = ["Sameera","Amaya","Sachith","Ashan"];
ourArray.shift();
console.log(ourArray) //delete first element of the array

//Multiple arrays with unshift()
var ourArray = ["Sameera","Amaya","Sachith","Ashan"];
ourArray.shift(); //sameera is deleted
ourArray.unshift("Madhuranga"); //Madjuranga is added to the beggining of the array
console.log(ourArray)

//Shopping list
var myList = [["cereal", 3],["milk",2],["bananas", 3]];
console.log(myList)