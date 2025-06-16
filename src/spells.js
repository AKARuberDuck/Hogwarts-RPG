const spells = {
    "Expelliarmus": "Disarms your opponent!",
    "Lumos": "Lights up dark areas!",
    "Alohomora": "Unlocks doors!",
    "Expecto Patronum": "Summons your Patronus!"
};

function castSpell(spellName) {
    return spells[spellName] || "❌ Invalid spell!";
}

// Example usage:
console.log(castSpell("Lumos")); // Output: "Lights up dark areas!"
