async function updateHousePoints(house, points) {
    const response = await fetch("/update-house-points", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ house, points })
    });

    return response.ok ? `✅ ${house} gained ${points} points!` : "❌ Failed to update points.";
}

// Example usage:
updateHousePoints("Gryffindor", 10).then(console.log);
