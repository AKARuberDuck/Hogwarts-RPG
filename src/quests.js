const quests = [
    { name: "Retrieve the Sorcerer's Stone", reward: 100 },
    { name: "Defeat a Basilisk", reward: 200 },
    { name: "Win the Triwizard Tournament", reward: 300 }
];

function getQuestDetails(questName) {
    const quest = quests.find(q => q.name === questName);
    return quest ? `📜 Quest: ${quest.name} - 🏆 Reward: ${quest.reward} points` : "❌ Quest not found!";
}

// Example usage:
console.log(getQuestDetails("Defeat a Basilisk")); // Output: "Quest: Defeat a Basilisk - Reward: 200 points"
