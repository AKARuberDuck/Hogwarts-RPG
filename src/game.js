async function startSorting() {
    const username = prompt("Enter your name:");
    const answers = ["Gryffindor", "Bravery", "Courage"]; 

    const response = await fetch("/sort", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, answers })
    });

    const data = await response.json();
    document.getElementById("result").innerHTML = data.message;
}

async function duelOpponent() {
    let playerSpell = prompt("Choose your spell: Expelliarmus, Protego, Stupefy, Crucio");
    let opponentSpell = ["Expelliarmus", "Protego", "Stupefy", "Crucio"][Math.floor(Math.random() * 4)];

    const response = await fetch("/duel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerSpell, opponentSpell })
    });

    const data = await response.json();
    document.getElementById("result").innerHTML = data.result;
}

async function playQuidditch() {
    const house = prompt("Enter your house:");
    const points = Math.random() > 0.5 ? 150 : 10;

    await fetch("/quidditch-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ house, points })
    });

    document.getElementById("result").innerHTML = `🏆 ${house} earned ${points} Quidditch points!`;
}
