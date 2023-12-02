// Iteration 1: Make the Play button functional.
const start=document.getElementById("play-button")
start.addEventListener("click",myFunction)
function myFunction() {
    location.replace("./game.html")
  }
// Description: When the Play button is clicked the game page should be displayed.
