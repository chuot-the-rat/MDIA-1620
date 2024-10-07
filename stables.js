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

if (horseName === "Hippo" && !isHorseInside) {
    console.log (`${horseName} is outside!`);
} else if (horseName === "Hippo" && isHorseInside) {
    console.log (horseName + " is isnide");
} else {
    console.log ("Where is my horse!?")
}















