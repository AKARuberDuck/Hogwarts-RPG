const positions = ["Seeker", "Beater", "Keeper", "Chaser"];

function quidditchMatch(position) {
    if (!positions.includes(position)) return "❌ Invalid position!";

    const outcomes = {
        "Seeker": Math.random() > 0.5 ? "⚡ You caught the Golden Snitch! Your house wins!" : "❌ You missed the Snitch! Try again.",
        "Beater": Math.random() > 0.7 ? "🏏 You successfully defended your teammates!" : "❌ You got hit by a Bludger!",
        "Keeper": Math.random() > 0.75 ? "🥅 You blocked the shot!" : "❌ The opposing team scored!",
        "Chaser": Math.random() > 0.6 ? "🏆 You scored a goal for your house!" : "❌ The shot missed!"
    };

    return outcomes[position];
}

module.exports = { positions, quidditchMatch };
