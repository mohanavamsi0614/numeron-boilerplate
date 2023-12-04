// Iteration 2: Generate 2 random number and display it on the screen
var ans=0
var c=0
var counter=document.getElementById("timer")
localStorage.setItem("score",ans)
function main() {
    let sec = 6
const countdown = () => {
  sec--
  counter.innerHTML = sec;
  if (sec <= 0) {
    location.replace("./gameover.html")
  }}
 const d=setInterval(countdown,1000);
    // if (ans==5 || c==5){
    //     location.replace("./gameover.html")
    // }
let num1=Math.ceil(Math.random()*100)
let num2=Math.ceil(Math.random()*100)
const number1=document.getElementById("number1")
const number2=document.getElementById("number2")
number1.innerHTML=num1
number2.innerHTML=num2
const greater=document.getElementById("greater-than")
const lesser=document.getElementById("lesser-than")
const equal=document.getElementById("equal-to")
greater.onclick=()=>{game(">")}
lesser.onclick=()=>{game("<")}
equal.onclick=()=>{game("==")}
function game(i) {
    if(eval(num1+i+num2)){
        ans++
        clearInterval(d)
        main()
    }
    else{
        location.replace("./gameover.html")
    }
    c++
    localStorage.setItem("score",ans)
}}
main()
