const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
let timerId = null


btnStop.setAttribute("disabled", true)

function handleStart(e) {
  setBodyColor()
  e.target.setAttribute("disabled", true)
  btnStop.removeAttribute("disabled")
    timerId = setInterval(() => {
    setBodyColor()
}, 1000)
}

function handleStop(e) {
  
  e.target.setAttribute("disabled", true)
  btnStart.removeAttribute("disabled")
  clearInterval(timerId)
}

function setBodyColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener("click", handleStart)

btnStop.addEventListener("click", handleStop)

