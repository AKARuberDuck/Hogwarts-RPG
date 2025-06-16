const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// 🏰 Supabase Configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const db = createClient(supabaseUrl, supabaseKey);

// 🔥 Health Check
app.get("/", (req, res) => {
    res.json({ message: "🚀 Hogwarts RPG API is running!" });
});

// 🎩 Sorting Ceremony
app.post("/sort", async (req, res) => {
    const { username, answers } = req.body;
    const housePoints = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };
    answers.forEach(answer => housePoints[answer]++);
    let sortedHouse = Object.keys(housePoints).reduce((a, b) => housePoints[a] > housePoints[b] ? a : b);
    
    await db.from("player_data").insert([{ username, house: sortedHouse }]);
    res.json({ message: `🎩 The Sorting Hat declares: You belong in **${sortedHouse}**!` });
});

// ⚔️ Wizard Duel
app.post("/duel", async (req, res) => {
    const duelSpells = ["Expelliarmus", "Protego", "Stupefy", "Crucio"];
    const { playerSpell, opponentSpell } = req.body;

    let result = determineDuelOutcome(playerSpell, opponentSpell);
    res.json({ result });
});

function determineDuelOutcome(playerSpell, opponentSpell) {
    if (playerSpell === "Expelliarmus" && opponentSpell !== "Protego") {
        return "⚔️ You disarmed your opponent! You win!";
    } else if (playerSpell === "Protego") {
        return "🛡️ You blocked the attack!";
    } else {
        return "💥 You took damage! Try again.";
    }
}

// 🏆 Quidditch Scoring
app.post("/quidditch-score", async (req, res) => {
    const { house, points } = req.body;
    await db.from("house_points").update({ points }).eq("house", house);
    res.json({ message: `🏆 ${house} earned ${points} points in Quidditch!` });
});

// 🔼 Wizard Career Progression
app.post("/promote", async (req, res) => {
    const { career, currentRank } = req.body;
    const careerRanks = {
        "Auror": ["Trainee", "Junior Auror", "Senior Auror", "Head Auror"],
        "Professor": ["Apprentice", "Assistant Professor", "Full Professor", "Head of Department"]
    };
    const ranks = careerRanks[career];
    const index = ranks.indexOf(currentRank);
    let promotionMessage = index === -1 || index === ranks.length - 1
        ? "🌟 You have reached the highest rank!"
        : `🎓 Promoted from **${currentRank}** to **${ranks[index + 1]}**!`;

    res.json({ message: promotionMessage });
});

// 🚀 Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Hogwarts RPG server running on port ${PORT}!`));
