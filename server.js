const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// 🏰 Supabase Configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// ✅ Validate Supabase Credentials
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Missing Supabase credentials. Ensure SUPABASE_URL and SUPABASE_KEY are set.");
    process.exit(1);
}

try {
    new URL(supabaseUrl); // Validate URL format
} catch (error) {
    console.error("❌ Invalid Supabase URL:", supabaseUrl);
    process.exit(1);
}

const db = createClient(supabaseUrl, supabaseKey);

// 🔥 Health Check (Root Route)
app.get("/", (req, res) => {
    res.json({ message: "🚀 Hogwarts RPG API is running!" });
});

// 🏆 Fetch House Points
app.get("/house-points", async (req, res) => {
    const { data, error } = await db.from("house_points").select("*");
