
function Horse (name,nickname,favSnack, monthlyRent, isInside, age, color) {
    this.name = name;
    this.nickname = nickname;
    this.favSnack = favSnack;
    this.MONTHLY_RENT = monthlyRent;
    this.isInside = isInside;
    this.age = age;
    this.color = color;
    this.introduction = function() {
        console.log(`Welcome! This is ${this.name}! Their nickname is ${this.nickName}!`);
    }
    this.rentNotice = function(daysUntilDue) {
        console.log(`${this.name}'s rent is due in ${daysUntilDue}, and is $${this.MONTHLY_RENT}! Please pay promptly!`);
    }
}

let hippo = new Horse("Hippo", "Cow", "bees", 150, false, 1, "pink");
let beans = new Horse("Soup", "Cream of Mushroom", "Grass", 120, false, 2, "blue");
let beef = new Horse("Beef", "Roast", "Souls", 125, true, 10, "green"); 

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
