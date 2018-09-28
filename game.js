// Elie Bizimana
// Game: It's an app to help you keep track score.


var p1Button = document.querySelector("#player1");
var p1Display = document.querySelector("#p1");
var p2Button = document.querySelector("#player2");
var p2Display = document.querySelector("#p2");
var reset = document.querySelector("#reset")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningPoint = 5

p1Button.addEventListener("click", function(){
  if (!gameOver) {
    p1Score++;
    if (winningPoint === p1Score) {
      p1Display.style.color = "green"
      gameOver = true
    }
  }
  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
  if (!gameOver) {
    p2Score++;
    if (winningPoint === p2Score) {
      p2Display.style.color = "green"
      gameOver = true
    }
  }
  p2Display.textContent = p2Score;
});

reset.addEventListener("click", function(){
  p1Score = 0
  p2Score = 0

  p1Display.textContent = 0
  p2Display.textContent = 0

  p1Display.style.color = "black"
  p2Display.style.color = "black"

  gameOver = false
})
