async function startSorting() {
    const username = prompt("Enter your name:");
    const answers = ["Gryffindor", "Bravery", "Courage"]; // Example

    const response = await fetch("/sort", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, answers })
    });

    const data = await response.json();
    document.getElementById("result").innerHTML = data.message;
}

async function fetchHousePoints() {
    const response = await fetch("/house-points");
    const data = await response.json();

    let houseDisplay = "<h2>🏆 House Points</h2>";
    data.forEach(house => {
        houseDisplay += `<p><b>${house.house}:</b> ${house.points} points</p>`;
    });

    document.getElementById("result").innerHTML = houseDisplay;
}
