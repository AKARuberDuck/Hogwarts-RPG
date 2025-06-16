document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "w": case "ArrowUp": movePlayer("up"); break;
        case "a": case "ArrowLeft": movePlayer("left"); break;
        case "s": case "ArrowDown": movePlayer("down"); break;
        case "d": case "ArrowRight": movePlayer("right"); break;
        case "Shift": runPlayer(); break;
        case "Space": jumpPlayer(); break;
    }
});

function movePlayer(direction) {
    console.log(`🚶 Moving ${direction}`);
}

function runPlayer() {
    console.log("🏃 Running faster!");
}

function jumpPlayer() {
    console.log("🦘 Jumping!");
}
