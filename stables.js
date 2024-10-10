//--------  LESSON-3 CODE  --------

let horseName = "Hippo";         
let horseNickName = "Cow"
let horseAge = 9;         
let isHorseInside = true;         
let horseIntroduction = " is the name of my horse and their nickname is ";        

//console.log(horseName + horseIntroduction + horseNickName);

//--------  LESSON-4 CODE  --------

const STABLE_MONTTHLY_FEE = 100;            
let stableSavings = (STABLE_MONTTHLY_FEE*0.1)*3;

let rentIntroduction = "It costs $" + (STABLE_MONTTHLY_FEE*0.9)*3 + " to board " + horseName + " for 3 months and saving $" + stableSavings + " with a 10% discount!";
//let rentIntroduction = `It costs ${STABLE_MONTTHLY_FEE} to board ${horseName} `;
//console.log(rentIntroduction);

let stableIntroduction = `Welcome to "${horseName}"'s stable`;
//console.log(stableIntroduction);

//--------  LESSON-5 CODE  --------

let visitorHorseName = "Chicken";

/*
if (horseName === "Hippo" && !isHorseInside) {
    console.log (`${horseName} is outside!`);
} else if (horseName === "Hippo" && isHorseInside) {
    console.log (horseName + " is isnide");
} else {
    console.log ("Where is my horse!?")
}
*/

//--------  LESSON-6 CODE  --------

//Horse = ["name", age, isInside, "nickname"];
let horseOne = [horseName, horseAge, isHorseInside, horseNickName];
let horseTwo = ["Cream of Mushroom", 2, false, "Soup"];
let horseThree = ["Roast", 5, ]

let horseNames = [horseName, horseTwo[0], "Roast"];
let horseAges = [horseAge, 2, 10];
let horseNickNames = [horseNickName, "Soup", "Beef"];
let areHorsesInside = [isHorseInside, false, true];

console.log(horseOne[0] + "'s nickname is " + horseOne[3]);
horseOne.push("Blue"); //pushes up something to the end of an array
console.log(`${horseTwo[0]}'s nickname is ${horseTwo[3]}`);
console.log(horseOne[1] + horseTwo[1]);

if (horseOne[1] === 3){
    console.log(horseOne[0] + " is 3");
} else {
    console.log(horseOne[0] + " is NOT 3");
}

let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, and ${horseNames[2]}! ${horseNames[0]}'s nickname is ${horseNickNames[0]} and his friends go by ${horseNickName[1]} ${horseNickNames[3]}, and ${horse}`
console.log(horseIntro);









/* 

LAB TODAY - branch lesson-6 donr by Sunday

Stables.js
-output an introduction to our horses
- output whether your horses are inside or outside (at least 3!!!)

ReadMe
3 confusing things 
3 things you feel like you have a solid understanding of 
Any analogies that you use to think about things (gif?)

*/












