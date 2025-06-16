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

// 🏆 Fetch House Points
app.get("/house-points", async (req, res) => {
    const { data, error } = await db.from("house_points").select("*");
    if (error) return res.status(500).json({ error });
    res.json(data);
});

// 🎩 Sorting Ceremony
app.post("/sort", async (req, res) => {
    const { username, answers } = req.body;
    const housePoints = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };
    answers.forEach(answer => housePoints[answer]++);
    let sortedHouse = Object.keys(housePoints).reduce((a, b) => housePoints[a] > housePoints[b] ? a : b);
    
    const { error } = await db.from("player_data").insert([{ username, house: sortedHouse }]);
    if (error) return res.status(500).json({ error });

    res.json({ message: `🎩 The Sorting Hat declares: You belong in **${sortedHouse}**!` });
});

// 🪄 Spell Casting
app.post("/cast-spell", async (req, res) => {
    const spells = {
        "Expelliarmus": "Disarms your opponent!",
        "Lumos": "Lights up dark areas!",
        "Alohomora": "Unlocks doors!",
        "Expecto Patronum": "Summons your Patronus!"
    };

    const { spellName } = req.body;
    res.json({ message: spells[spellName] || "❌ Invalid spell!" });
});

// 🏆 Quidditch Scoring
app.post("/quidditch-score", async (req, res) => {
    const { house, points } = req.body;
    if (!house || points === undefined) return res.status(400).json({ error: "Missing data" });

    const { error } = await db.from("house_points").update({ points }).eq("house", house);
    if (error) return res.status
