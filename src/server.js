const express = require("express");
const cors = require("cors");
const supabase = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json()); // Allows JSON request handling

// 🏰 Supabase Configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// ✅ Check if Supabase credentials exist
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Missing Supabase credentials. Ensure SUPABASE_URL and SUPABASE_KEY are set.");
    process.exit(1);
}

// ✅ Validate Supabase URL format before creating the client
try {
    new URL(supabaseUrl);
} catch (error) {
    console.error("❌ Invalid Supabase URL:", supabaseUrl);
    process.exit(1);
}

const db = supabase.createClient(supabaseUrl, supabaseKey);

// 🔒 Player Sign-Up (Register a New Account)
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing credentials" });

    const { data, error } = await db.auth.signUp({ email, password });
    if (error) return res.status(500).json({ error });

    res.json({ message: "✅ Account created successfully!", data });
});

// 🔑 Player Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing credentials" });

    const { data, error } = await db.auth.signInWithPassword({ email, password });
    if (error) return res.status(401).json({ error });

    res.json({ message: "✅ Login successful!", data });
});

// 🏆 Fetch House Points
app.get("/house-points", async (req, res) => {
    const { data, error } = await db.from("house_points").select("*");
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

    const { error } = await db.from("player_data").insert([{ username, house: sortedHouse }]);
    if (error) return res.status(500).json({ error });

    res.json({ message: `🎩 The Sorting Hat declares: You belong in **${sortedHouse}**!` });
});

//
