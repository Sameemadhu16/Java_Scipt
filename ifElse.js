//boolean values true or false

//Use conditional logic with if statement
function ourTrueFalse(isItTrue){
    if(isItTrue){
        return "yes, it is true.";
    }
    return "No it is false.";
}
console.log(ourTrueFalse(true))

//Comparison with equality operator
function testEqual(val){
    if(val == '12'){
        return "Equal";
    }
    return "Not equal";
}
console.log(testEqual(12))

//Comparison with strict equality operator
function testEqual1(val){
    if(val === '12'){
        return "Equal";
    }
    return "Not equal";
}
console.log(testEqual1(12))
console.log(testEqual1('12')) // not type converted in strict equality operator

//Practice comparing different values
function compareEqual(a, b){
    if(a == b){
        return "equal";
    }
    return "false";
}

function compareEqual1(a, b){
    if(a === b){
        return "equal";
    }
    return "false"
}
console.log(compareEqual(5, '5'))
console.log(compareEqual1(5,'5'))

//Comparison with inequality operator (!=)
//Comparison with strict inequality operator (!==)
//Comparison with logical operators ( < > <= >=)
//ANd operator
function testLogicalAnd(val){
    if(val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(30))
console.log(testLogicalAnd(10))

//Or operator
function testLogicalAnd(val){
    if(val < 50 || val  > 25){
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(30))
console.log(testLogicalAnd(50))

//Esle statement
function testElse(val){
    var result = "";
    if (val >5){
        console.log(result = "Bigger than 5");
    }else{
        console.log(result = "5 or smaller.");
    }
}
testElse(8);
testElse(5);
testElse(3);

//else if (order is significant)

//Chaning if else statements
function testSize(num){
    if (num < 5){
        return "Tiny";
    }else if(num < 10){
        return "Small"
    }else if(num < 15){
        return "Medium";
    }else if(num < 20){
        return "Large";
    }else{
        return "Huge";
    }  
}
console.log(testSize(6))
console.log(testSize(16))
console.log(testSize(56))