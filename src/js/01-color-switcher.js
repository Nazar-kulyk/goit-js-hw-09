const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorSwitcher() {
  if (intervalId === null) {
    startButton.disabled = true;
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
}

function stopColorSwitcher() {
  if (intervalId !== null) {
    startButton.disabled = false;
    clearInterval(intervalId);
    intervalId = null;
  }
}

startButton.addEventListener('click', startColorSwitcher);
stopButton.addEventListener('click', stopColorSwitcher);
