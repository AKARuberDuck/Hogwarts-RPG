function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "f") {  
        toggleFullscreen();
    }
});

document.getElementById("fullscreenButton").addEventListener("click", toggleFullscreen);
