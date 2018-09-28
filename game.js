// Elie Bizimana
// Game: It's an app to help you keep track score.


var p1Button = document.querySelector("#player1");
var p1Display = document.querySelector("#p1");
var p2Button = document.querySelector("#player2");
var p2Diplay = document.querySelector("#p2")
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
  p1Score++;
  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function() {
  p2Score++;
  p2Display.textContent = p2Score;
});
