const positions = ["Seeker", "Beater", "Keeper", "Chaser"];

async function quidditchMatch(position, house) {
    if (!positions.includes(position)) return "❌ Invalid position!";

    const outcomes = {
        "Seeker": Math.random() > 0.5 ? { message: "⚡ You caught the Golden Snitch!", points: 150 } : { message: "❌ You missed the Snitch!", points: 0 },
        "Beater": Math.random() > 0.7 ? { message: "🏏 You defended teammates!", points: 10 } : { message: "❌ You got hit by a Bludger!", points: -5 },
        "Keeper": Math.random() > 0.75 ? { message: "🥅 You blocked the shot!", points: 10 } : { message: "❌ The opposing team scored!", points: -10 },
        "Chaser": Math.random() > 0.6 ? { message: "🏆 You scored a goal!", points: 10 } : { message: "❌ The shot missed!", points: 0 }
    };

    const result = outcomes[position];

    // 🏆 Update House Points in Supabase
    await fetch("/update-house-points", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ house, points: result.points })
    });

    return result.message;
}

module.exports = { positions, quidditchMatch };
