const express = require("express");
const cors = require("cors");
const supabase = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json()); // Allows JSON request handling

// 🏰 Supabase Configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const db = supabase.createClient(supabaseUrl, supabaseKey);

// 🔒 Player Sign-Up (Register a New Account)
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing credentials" });

    const { user, error } = await db.auth.signUp({ email, password });
    if (error) return res.status(500).json({ error });

    res.json({ message: "✅ Account created successfully!", user });
});

// 🔑 Player Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing credentials" });

    const { session, error } = await db.auth.signInWithPassword({ email, password });
    if (error) return res.status(401).json({ error });

    res.json({ message: "✅ Login successful!", session });
});

// 🏆 Fetch House Points
app.get("/house-points", async (req, res) => {
    let { data, error } = await db.from("house_points").select("*");
    if (error) return res.status(500).json({ error });
    res.json(data);
});

// 🎩 Sorting Ceremony (Assign House)
app.post("/sort", async (req, res) => {
    const { username, answers } = req.body;
    if (!username || !answers) return res.status(400).json({ error: "Missing data" });

    const housePoints = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };
    answers.forEach(answer => housePoints[answer]++);
    let sortedHouse = Object.keys(housePoints).reduce((a, b) => housePoints[a] > housePoints[b] ? a : b);

    let { error } = await db.from("player_data").insert([{ username, house: sortedHouse }]);
    if (error) return res.status(500).json({ error });

    res.json({ message: `🎩 The Sorting Hat declares: You belong in **${sortedHouse}**!` });
});

// 🪄 Wand Selection
app.post("/wand", async (req, res) => {
    const { username, answers } = req.body;
    if (!username || !answers) return res.status(400).json({ error: "Missing data" });

    const wandCores = ["Phoenix Feather", "Dragon Heartstring", "Unicorn Hair"];
    const wandWoods = ["Oak", "Holly", "Elm", "Yew", "Cherry"];
    let core = wandCores[answers.includes("Creativity") ? 0 : answers.includes("Strength") ? 1 : 2];
    let wood = wandWoods[answers.includes("Defense magic") ? 0 : answers.includes("Nature magic") ? 3 : 4];

    let { error } = await db.from("player_data").update({ wand: `${wood} with ${core} core` }).eq("username", username);
    if (error) return res.status(500).json({ error });

    res.json({ message: `🪄 Your wand is crafted from **${wood}**, with a **${core}** core!` });
});

// 🔮 Spell Casting
app.post("/spell", async (req, res) => {
    const { spellName } = req.body;
    const spells = {
        "Expelliarmus": "Disarms your opponent!",
        "Lumos": "Lights up dark areas!",
        "Alohomora": "Unlocks doors!",
        "Expecto Patronum": "Summons your Patronus!"
    };

    res.json({ message: spells[spellName] || "❌ Invalid spell!" });
});

// 🚀 Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`
