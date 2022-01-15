const card = document.querySelectorAll(".card");
// 0: days, 1: hours, 2:minutes, 3:seconds
const card_days = card[0];
const card_hours = card[1];
const card_minutes = card[2];
const card_seconds = card[3];

const p_currentSeconds = document.querySelectorAll(".next-second");
const p_prevSeconds = document.querySelectorAll(".prev-second");

const p_currentMinutes = document.querySelectorAll(".next-minutes");
const p_prevMinutes = document.querySelectorAll(".prev-minutes");

const p_currentHours = document.querySelectorAll(".next-hours");
const p_prevHours = document.querySelectorAll(".prev-hours");

const p_currentDays = document.querySelectorAll(".next-days");
const p_prevDays = document.querySelectorAll(".prev-days");

let second = 50;
let minutes = 50;
let hours = 22;
let days = 10;
let prevSecond = second - 1;
let prevMinutes = minutes - 1;
let prevHours = hours - 1;
let prevDays = days - 1;

for (let i = 0; i < 2; i++) {
  p_currentSeconds[i].innerHTML = second - 1;
  p_prevSeconds[i].innerHTML = prevSecond - 1;
  p_currentMinutes[i].innerHTML = minutes - 1;
  p_prevMinutes[i].innerHTML = prevMinutes - 1;
  p_currentHours[i].innerHTML = hours - 1;
  p_prevHours[i].innerHTML = prevHours - 1;
  p_currentDays[i].innerHTML = days - 1;
  p_prevDays[i].innerHTML = prevDays - 1;
}

//seconds
setInterval(() => {
  card_seconds.style.transition = "transform 0.5s";
  card_seconds.classList.toggle("is-flipped");
  prevSecond = second - 1;
  if (second >= 60) {
    second = 0;
    setTimeout(() => {
      minutesDoFlip();
    }, 500);
  }
  setTimeout(() => {
    card_seconds.style.transition = "transform 0s";
    card_seconds.classList.toggle("is-flipped");

    for (let i = 0; i < 2; i++) {
      p_currentSeconds[i].innerHTML = second;
      p_prevSeconds[i].innerHTML = prevSecond;
    }
    second++;
  }, 500);
}, 1000);

function minutesDoFlip() {
  card_minutes.style.transition = "transform 0.5s";
  card_minutes.classList.toggle("is-flipped");
  prevMinutes = minutes - 1;
  if (minutes >= 60) {
    minutes = 0;
    hoursDoFlip();
  }
  setTimeout(() => {
    card_minutes.style.transition = "transform 0s";
    card_minutes.classList.toggle("is-flipped");

    for (let i = 0; i < 2; i++) {
      p_currentMinutes[i].innerHTML = minutes;
      p_prevMinutes[i].innerHTML = prevMinutes;
    }
    minutes++;
  }, 500);
}

function hoursDoFlip() {
  card_hours.style.transition = "transform 0.5s";
  card_hours.classList.toggle("is-flipped");
  prevHours = hours - 1;
  if (hours >= 24) {
    hours = 0;
    daysDoFlip();
  }
  setTimeout(() => {
    card_hours.style.transition = "transform 0s";
    card_hours.classList.toggle("is-flipped");

    for (let i = 0; i < 2; i++) {
      p_currentHours[i].innerHTML = hours;
      p_prevHours[i].innerHTML = prevHours;
    }
    hours++;
  }, 500);
}

function daysDoFlip() {
  card_days.style.transition = "transform 0.5s";
  card_days.classList.toggle("is-flipped");
  prevDays = days - 1;
  setTimeout(() => {
    card_days.style.transition = "transform 0s";
    card_days.classList.toggle("is-flipped");

    for (let i = 0; i < 2; i++) {
      p_currentDays[i].innerHTML = days;
      p_prevDays[i].innerHTML = prevDays;
    }
    days++;
  }, 500);
}

