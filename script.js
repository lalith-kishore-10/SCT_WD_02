let minute = 0;
let second = 0;
let millisecond = 0;
let timer;

const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");
const millisecondDisplay = document.getElementById("milliseconds");

function updateTime() {
  millisecond += 10;

  if (millisecond === 1000) {
    millisecond = 0;
    second++;
  }

  if (second === 60) {
    second = 0;
    minute++;
  }

  if (minute < 10) {
    minuteDisplay.textContent = "0" + minute;
  } else {
    minuteDisplay.textContent = minute;
  }

  if (second < 10) {
    secondDisplay.textContent = "0" + second;
  } else {
    secondDisplay.textContent = second;
  }

  if (millisecond < 100) {
    millisecondDisplay.textContent = "0" + (millisecond / 10);
  } else {
    millisecondDisplay.textContent = millisecond / 10;
  }
}

document.getElementById("start").addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(updateTime, 10);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  minute = 0;
  second = 0;
  millisecond = 0;
  minuteDisplay.textContent = "00";
  secondDisplay.textContent = "00";
  millisecondDisplay.textContent = "00";
});
