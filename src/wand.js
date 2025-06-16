const wandCores = ["Phoenix Feather", "Dragon Heartstring", "Unicorn Hair"];
const wandWoods = ["Oak", "Holly", "Elm", "Yew", "Cherry"];
const hpCharacterNames = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Draco Malfoy"];

function validatePlayerName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    if (hpCharacterNames.includes(fullName)) {
        return "❌ That name belongs to a Harry Potter character. Please choose another.";
    }
    return "✅ Name accepted!";
}

function assignWand(answers) {
    let core = wandCores[answers.includes("Creativity") ? 0 : answers.includes("Strength") ? 1 : 2];
    let wood = wandWoods[answers.includes("Defense magic") ? 0 : answers.includes("Nature magic") ? 3 : 4];

    return `🪄 Your wand is crafted from **${wood}**, with a **${core}** core!`;
}

module.exports = { validatePlayerName, assignWand };
