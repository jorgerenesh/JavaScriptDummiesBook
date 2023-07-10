const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let xPosition = 0;
let yPosition = 0;

function handleKeyPress(key) {
  if (key.code === "ArrowLeft") {
    xPosition = xPosition - 10;
  } else if (key.code === "ArrowRight") {
    xPosition = xPosition + 10;
  }
  if (xPosition < 0) {
    xPosition = 0;
  }

  if (key.code === "ArrowUp") {
    yPosition = yPosition - 10;
  } else if (key.code === "ArrowDown") {
    yPosition = yPosition + 10;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  refresh();
}
function refresh() {
  ball.style.left = xPosition + "px";
  ball.style.top = yPosition + "px";
}
