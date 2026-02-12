document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("yesBtn").hidden = true;
    document.getElementById("noBtn").hidden = true;
    document.getElementById("explosionMind").hidden = false;
    document.getElementById("subliminalMsg").innerText = "🐟🐢🐟🐢🐟🐢🐟🐢 are the best in the sea 🐟🐢🐟🐢🐟🐢🐟🐢";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let offSetX = 80;
    let offSetY = 100;
    let xPosition = randomIntFromInterval(offSetX, window.innerWidth - this.offsetWidth - offSetX);
    let yPosition = randomIntFromInterval(offSetY, window.innerHeight - this.offsetHeight - offSetY);
    console.log(xPosition, yPosition);

    this.style.position = "absolute";
    this.style.left = xPosition + "px";
    this.style.top = yPosition + "px";
});

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}