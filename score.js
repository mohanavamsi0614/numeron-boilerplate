const again=document.getElementById("play-again-button")
again.addEventListener("click",()=>{
    location.replace("./game.html")
})
const score=document.getElementById("score-board")
score.innerHTML=localStorage.getItem("score")
console.log(localStorage.getItem("score"))