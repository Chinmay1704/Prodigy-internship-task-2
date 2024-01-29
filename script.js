const playBtn = document.getElementsByClassName("play")[0];
const lapBtn = document.getElementsByClassName("lap")[0];
const resetBtn = document.getElementsByClassName("reset")[0];
const clearAllBtn = document.getElementsByClassName("laps-clear-btn")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("second")[0];
const mili = document.getElementsByClassName("milisec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer-circle")[0];

let isPlay = false;
let isReset = false;
let secCounter = 0;
let sec;
let min;
let minCounter = 0;
let miliCounter = 0;
let milisec;
let lapItem = 0;

const toggleButton = () => {
  lapBtn.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
};

const play = () => {
  if (!isPlay && !isReset) {
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    bg.classList.add("animation-bg");
    min = setInterval(() => {
      if (minCounter === 60) {
        minCounter = 0;
      }
      minute.innerHTML = `${++minCounter} :`;
    }, 60 * 1000);

    sec = setInterval(() => {
      if (secCounter === 60) {
        secCounter = 0;
      }
      second.innerHTML = `&nbsp;${++secCounter} :`;
    }, 1000);

    milisec = setInterval(() => {
      if (miliCounter === 100) {
        miliCounter = 0;
      }
      mili.innerHTML = `&nbsp;${++miliCounter}`;
    }, 10);

    isPlay = true;
    isReset = true;
  } else {
    playBtn.innerHTML = '<i class="fa-solid fa-play">';
    clearInterval(min);
    clearInterval(sec);
    clearInterval(milisec);
    isPlay = false;
    isReset = false;
    bg.classList.remove("animation-bg");
  }
  toggleButton();
};

const playSec = () => {};

const reset = () => {
  isReset = true;
  play();
  lapBtn.classList.add("hidden");
  resetBtn.classList.add("hidden");
  secCounter = 0;
  minute.innerHTML = "0 :";
  second.innerHTML = "0 :";
  mili.innerHTML = "00";
};

const lap = () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");

  li.setAttribute("class", "lap-item");
  number.setAttribute("class", "number");
  timeStamp.setAttribute("class", "time-stamp");

  number.innerText = `${++lapItem}`;
  timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${miliCounter}`;

  li.append(number, timeStamp);
  laps.append(li);

  clearAllBtn.classList.remove("hidden");
};

const clearAll = () => {
  laps.innerHTML = "";
  laps.append(clearAllBtn);
  lapItem = 0;
  clearAllBtn.classList.add("hidden");
};

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
clearAllBtn.addEventListener("click", clearAll);
