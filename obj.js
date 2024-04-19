//Build objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "the friends": ["everything"]
};
console.log(ourDog)

//Accessing object properties with dot notation
var Name = ourDog.name;
var Friend = ourDog.friends;
console.log(Name ,Friend);

//Accesing object properties with bracket notation
var my = ourDog["the friends"];
console.log(my)

//Accessing object properties with variables

//Upading object properties
ourDog.name = "Boss";
console.log(ourDog.name);
//Add new properties to the object
ourDog.bark = "bow-bow";
ourDog.color ="Black";
ourDog["head"] ="strong";
console.log(ourDog)

//Delete properties
delete ourDog.head;
console.log(ourDog)

//Using objects for lookups
//testing objects for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return "Not found"
    }
}
console.log(checkObj("hello"))
console.log(checkObj("gift"))

//Manipulating complex objects
var myMusic =[
    
    {
        "artist":"sameera",
        "title": "Guitar set",
        "release_year": 2003
    },
    
    {
        "artist": "madhuranga",
        "title": "the fun",
        "release_year": 2030
    }
]
console.log(myMusic)

//Accessing nested objects
var myStorage = {
    "car": {
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Accessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1];
var secondTree1 = myPlants[0].list[0];
console.log(secondTree);
console.log(secondTree1);

//Record collection

