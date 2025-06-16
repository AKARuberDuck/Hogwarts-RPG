const locations = {
    "Great Hall": "✨ Grand dining hall, enchanted candles above!",
    "Forbidden Forest": "🌲 A dark forest—strange whispers nearby!",
    "Library": "📚 Rows of ancient books with hidden magic.",
    "Hogsmeade": "🏘️ The famous wizard village awaits!"
};

function exploreLocation(location) {
    return locations[location] || "❌ Unknown location!";
}
