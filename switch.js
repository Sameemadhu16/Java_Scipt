//switch statement
function caseInSwitch(val){
var answer = "";
switch(val){
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beata";
        break;
    case 3:
         answer = "gamma";
        break;
    default:
        answer = "error"
        break;
    }
    return answer;
}
console.log(caseInSwitch(3));
console.log(caseInSwitch(1));
console.log(caseInSwitch(8)) //Default option in switch statement

//Multiple Identical options in switch statements
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break
        default:
            answer = "error"
            break;
        }
        return answer;
    }
    console.log(caseInSwitch(1))
    console.log(caseInSwitch(2))
    console.log(caseInSwitch(3))
    console.log(caseInSwitch(10))

    //Replecing if else chains with switch
    