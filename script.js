const logDiv = document.querySelector("#log");
const stateDiv = document.querySelector("#state");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");

// handling start button event
startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

// handling stop button event
stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logDiv.textContent = "";
  stateDiv.textContent = " ";
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// creating handles functions

function handleDown(e) {
  logDiv.textContent = `Key ${e.key} pressed down`;
  stateDiv.textContent = `Key is down`;
}

function handleUp(e) {
  logDiv.textContent = `Key ${e.key} pressed up`;
  stateDiv.textContent = `Key is up`;
}
