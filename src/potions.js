const potions = {
    "Polyjuice": ["Boomslang Skin", "Lacewing Flies", "Leeches"],
    "Felix Felicis": ["Ashwinder Eggs", "Squill", "Murtlap Essence"],
    "Draught of Peace": ["Moonstone", "Hellebore", "Peppermint"]
};

function brewPotion(potionName, ingredients) {
    const required = potions[potionName];
    if (!required) return "❌ Invalid potion!";
    
    return required.every(ingredient => ingredients.includes(ingredient))
        ? `🍵 Successfully brewed ${potionName}!`
        : "❌ Missing ingredients!";
}

// Example usage:
console.log(brewPotion("Felix Felicis", ["Ashwinder Eggs", "Squill", "Murtlap Essence"])); // Output: "Successfully brewed Felix Felicis!"
