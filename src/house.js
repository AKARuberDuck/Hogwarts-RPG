const supabase = require("@supabase/supabase-js");

const supabaseUrl = "https://YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_KEY";
const db = supabase.createClient(supabaseUrl, supabaseKey);

async function updateHousePoints(house, points) {
    await db.from("house_points").update({ [house]: points });
    return `✅ House points updated! ${house}: ${points}`;
}

module.exports = { updateHousePoints };
