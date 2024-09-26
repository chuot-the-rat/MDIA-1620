
let horseName = "Hippo";         
let horseAge = 5;         
let isHorseInStable = false;         
let horseIntroduction = " is the name of my horse";         
console.log(horseName);
console.log(horseAge);    
console.log(isHorseInStable);
console.log(horseName + horseIntroduction);

console.log(typeof 55555);
//number
console.log(typeof "4444");
//string
console.log(typeof false);
//boolean

const STABLE_MONTTHLY_FEE = 100;              //use uppercase for constants 
console.log(STABLE_MONTTHLY_FEE);
console.log((STABLE_MONTTHLY_FEE /2 )*12);

//let rentIntroduction = "it costs " + STABLE_MONTTHLY_FEE + " to board " + horseName;
let rentIntroduction = `It costs ${STABLE_MONTTHLY_FEE} to board ${horseName}`;
console.log(rentIntroduction);

//let stableIntroduction = "Welcome to " + horseName + "'s stable";
let stableIntroduction = `Welcome to "${horseName}"'s stable`
console.log(stableIntroduction);



