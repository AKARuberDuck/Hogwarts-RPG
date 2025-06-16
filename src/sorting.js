const housePoints = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };

const sortingQuiz = [
    { question: "What motivates you?", options: { Gryffindor: "Bravery", Slytherin: "Ambition", Ravenclaw: "Knowledge", Hufflepuff: "Helping others" }},
    { question: "A friend is bullied—what do you do?", options: { Gryffindor: "Confront bully", Slytherin: "Strategize later", Ravenclaw: "Report it", Hufflepuff: "Comfort friend" }},
    { question: "Pick a magical ability:", options: { Gryffindor: "Powerful spells", Slytherin: "Parseltongue", Ravenclaw: "Infinite wisdom", Hufflepuff: "Healing skills" }}
];

function sortPlayer(answers) {
    answers.forEach(answer => housePoints[answer]++);
    let sortedHouse = Object.keys(housePoints).reduce((a, b) => housePoints[a] > housePoints[b] ? a : b);
    return `🎩 The Sorting Hat declares: You belong in **${sortedHouse}**!`;
}

module.exports = { sortingQuiz, sortPlayer };
