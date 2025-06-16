const duelSpells = ["Expelliarmus", "Protego", "Stupefy", "Crucio"];
const opponentHealth = 100;
let playerHealth = 100;

function duelOpponent() {
    let playerSpell = prompt(`Choose your spell: ${duelSpells.join(", ")}`);
    
    if (!duelSpells.includes(playerSpell)) {
        alert("❌ Invalid spell! Try again.");
        return duelOpponent();
    }

    let opponentSpell = duelSpells[Math.floor(Math.random() * duelSpells.length)];
    let result = determineDuelOutcome(playerSpell, opponentSpell);

    document.getElementById("result").innerHTML = result;
}

function determineDuelOutcome(playerSpell, opponentSpell) {
    if (playerSpell === "Expelliarmus" && opponentSpell !== "Protego") {
        return "⚔️ You disarmed your opponent! You win!";
    } else if (playerSpell === "Protego") {
        return "🛡️ You blocked the attack!";
    } else if (playerSpell === "Stupefy") {
        return "🔥 You stunned your opponent!";
    } else {
        return "💥 You took damage! Try again.";
    }
}
