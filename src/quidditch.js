const positions = ["Seeker", "Beater", "Keeper", "Chaser"];

function quidditchMatch(position) {
    if (position === "Seeker") return "⚡ You chase the Golden Snitch!";
    else if (position === "Beater") return "🏏 You defend teammates with Bludgers!";
    else if (position === "Keeper") return "🥅 You guard the goalposts!";
    else if (position === "Chaser") return "🏆 You pass the Quaffle to score!";
    return "❌ Invalid position!";
}

module.exports = { positions, quidditchMatch };
