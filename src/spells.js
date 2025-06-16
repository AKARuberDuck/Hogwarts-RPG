const spells = {
    "Expelliarmus": "Disarms your opponent!",
    "Lumos": "Lights up dark areas!",
    "Alohomora": "Unlocks doors!",
    "Expecto Patronum": "Summons your Patronus!"
};

function castSpell(spellName) {
    return spells[spellName] ? `✨ You cast ${spellName}! ${spells[spellName]}` : "❌ Invalid spell!";
}

module.exports = { spells, castSpell };
