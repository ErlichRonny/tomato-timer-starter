function updateTimerDisplay(minutes, seconds) {
  const timeLeft = document.getElementById("time-left");
  timeLeft.textContent = `${minutes}:${seconds}`;
}


function startTimer(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  updateTimerDisplay(minutes, seconds);

  const countdown = setInterval(() => {
    duration--;
    minutes = Math.floor(duration / 60);
    seconds = duration % 60;
    updateTimerDisplay(minutes, seconds);
  }, 1000);

  setTimeout(() => {
    clearTimeout(countdown);
  }, duration * 1000);
}

startTimer(20);