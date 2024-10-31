const STABLE_MONTTHLY_FEE = 100;    

let horseName = "Hippo";         
let horseNickName = "Cow"
let horseAge = 1;         
let isHorseInside = false;         

let horseNames = [horseName,"Cream of Mushroom","Roast"];
let horseNickNames = [horseNickName, "Soup", "Beef"];
let horseAges = [horseAge, 2, 10];
let horseLocations = [isHorseInside, false, true];

let stableIntroduction = `Welcome to "${horseName}"'s stable`;
let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, and ${horseNames[2]}! ${horseNames[0]}'s nickname is ${horseNickNames[0]} and his friends go by ${horseTwo[0]} ${horseTwo[3]}, and ${horseThree[0]} ${horseThree[3]}`

function getHorseLocation(horse) {
    if (areHorsesInside[horse]) {
        return horseNames[horse] + " is inside.";
    }
    return horseNames[horse] + " is outside.";
}

function getHorseNicknames(horse, friend, thirdWheel) {
    const string = `${horseNames[horse]}'s nickname is ${horseNickNames[horse]}, and they have a friend named ${horseNames[friend]}, who is nicknamed ${horseNickNames[friend]}! They are kind of friends with ${horseNames[thirdWheel]}, but not really, and they never call them by their nickname!`;
    return string;
}
