//--------  LESSON-3 CODE  --------

let horseName = "Hippo";         
let horseNickName = "Cow"
let horseAge = 9;         
let isHorseInside = false;         
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
let horseThree = ["Roast", 5, false, "Beef"];

let horseNames = [horseName, horseTwo[0], horseThree[0]];
let horseAges = [horseAge, horseTwo[1], horseThree[1]];
let horseNickNames = [horseNickName, horseTwo[3], horseThree[3]];
let areHorsesInside = [isHorseInside, horseTwo[2], horseThree[2]];

horseOne.push("Blue"); //pushes up something to the end of an array

let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, and ${horseNames[2]}! ${horseNames[0]}'s nickname is ${horseNickNames[0]} and his friends go by ${horseTwo[0]} ${horseTwo[3]}, and ${horseThree[0]} ${horseThree[3]}`
//console.log(horseIntro);

/*
if (!areHorsesInside[0] && !areHorsesInside[1] && !areHorsesInside[2]) {
    console.log("all the horses are frolicking right now!");
} else if (!areHorsesInside[0] && !areHorsesInside[1] && areHorsesInside[2]) {
    console.log(horseThree[0] + " was left inside");
} else if (!areHorsesInside[0] && areHorsesInside[1] && !areHorsesInside[2]) {
    console.log(horseTwo[0] + " was left inside");
} else if (areHorsesInside[0] && !areHorsesInside[1] && !areHorsesInside[2]) {
    console.log(horseOne[0] + " was left inside");
} else if (areHorsesInside[0] && areHorsesInside[1] && !areHorsesInside[2]) {
    console.log(horseOne[0] + " and " + horseTwo[0] + " were left inside");
} else if (!areHorsesInside[0] && areHorsesInside[1] && areHorsesInside[2]) {
    console.log(horseTwo[0] + " and " + horseThree[0] + " were left inside");
} else if (areHorsesInside[0] && !areHorsesInside[1] && areHorsesInside[2]) {
    console.log(horseOne[0] + " and " + horseThree[0] + " were left inside");
} else {
    console.log("THEY ARE ALL TRAPPED INSIDE RAAAAAA!!!!");
}
*/

//--------  LESSON-7 CODE  --------

function logHorseNicknames(horse, friend, thirdWheel) {
    const string = `${horseNames[horse]}'s nickname is ${horseNickNames[horse]}, and they have a friend named ${horseNames[friend]}, who is nicknamed ${horseNickNames[friend]}! They are kind of friends with ${horseNames[thirdWheel]}, but not really, and they never call them by their nickname!`;
    console.log(string);
}

logHorseNicknames(1,2,0);

/*
"" <--- strings
`` <--- template literals
[] <--- arrays ONLY 
const arr = [1,2,3]
arr [0] = 1
() function paramaters, conditional statements
{} function bodies, conditional bodies, used with ${} fir template literal insertion 
*/

function payMe(demand, rent = STABLE_MONTTHLY_FEE) {
    console.log(`Pay me $${rent}! ${demand}!`)
}

//payMe("right now, or else!", 200);
//payMe("Pretty please");

function tidyLocation(horse) {
    if (areHorsesInside[horse]) {
        return horseNames[horse] + " is inside.";
    }
    return horseNames[horse] + " is outside.";
}

console.log(tidyLocation(0));
console.log(tidyLocation(1));
console.log(tidyLocation(2));









