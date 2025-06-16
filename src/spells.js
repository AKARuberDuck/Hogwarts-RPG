const spells = {
    "Expelliarmus": "Disarms opponent!",
    "Protego": "Shields against attack!",
    "Stupefy": "Stuns the target!",
    "Expecto Patronum": "Summons a Patronus!"
};

function castSpell(spellName) {
    return spells[spellName] || "❌ Invalid spell!";
}

function duelOpponent(playerSpell, opponentSpell) {
    return spells[playerSpell] && spells[opponentSpell] ? `⚔️ Duel Outcome: You cast ${playerSpell}, opponent cast ${opponentSpell}!` : "❌ Invalid spell selection!";
}
