var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
var p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
var numInput = document.querySelector("input");
var maxGame = document.querySelector("#max");
var playingToDisplay = document.querySelector("#playingTo");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click",function(){
    if (!gameOver) {
      p1Score++;
      if (p1Score === winningScore) {
        p1ScoreDisplay.classList.add("winner");
        gameOver = true;
      }
      p1ScoreDisplay.textContent = p1Score;
    }
});

p2Button.addEventListener("click",function(){
    if (!gameOver) {
      p2Score++;
      if (p2Score === winningScore) {
        p2ScoreDisplay.classList.add("winner");
        gameOver = true;
      }
      p2ScoreDisplay.textContent = p2Score;
    }
});

resetButton.addEventListener("click",function(){
  reset();
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = "0";
  p2ScoreDisplay.textContent = "0";
  p1ScoreDisplay.classList.remove("winner");
  p2ScoreDisplay.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change",function(){
  winningScore = Number(numInput.value);
  playingToDisplay.textContent = winningScore;
  reset();
})
