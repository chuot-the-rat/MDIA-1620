
let horseName = "Hippo";         
let horseNickName = "Cow"
//let horseAge = 5;         
//let isHorseInStable = false;         
let horseIntroduction = " is the name of my horse and their nickname is ";        

//console.log(horseName);
//console.log(horseAge);    
//console.log(isHorseInStable);
console.log(horseName + horseIntroduction + horseNickName);

const STABLE_MONTTHLY_FEE = 100;            
let stableSavings = (STABLE_MONTTHLY_FEE*0.1)*3;

let rentIntroduction = "It costs $" + (STABLE_MONTTHLY_FEE*0.9)*3 + " to board " + horseName + " for 3 months and saving $" + stableSavings + " with a 10% discount!";
//let rentIntroduction = `It costs ${STABLE_MONTTHLY_FEE} to board ${horseName} `;
console.log(rentIntroduction);

//let stableIntroduction = "Welcome to " + horseName + "'s stable";
//let stableIntroduction = `Welcome to "${horseName}"'s stable`
//console.log(stableIntroduction);
