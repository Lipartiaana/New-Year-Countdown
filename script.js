const newYearsDay = "1 Jan 2025";
const currentDate = new Date();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const number = document.querySelectorAll(".number");
const heading = document.getElementById("heading");

function countdown() {
  const newYearsDate = new Date(newYearsDay);
  const currentDate = new Date();
  const timeLeft = newYearsDate - currentDate;

  const daysNumber = Math.floor(timeLeft / 1000 / 3600 / 24);
  const hoursNumber = Math.floor((timeLeft / 1000 / 3600) % 24);
  const minutesNumber = Math.floor((timeLeft / 1000 / 60) % 60);
  const secondsNumber = Math.floor((timeLeft / 1000) % 60);

  if (timeLeft <= 0 && timeLeft >= -1000 * 3600 * 24) {
    heading.innerHTML = "Happy New Year!!";
    for (let i = 0; i < number.length; i++) {
      number[i].innerHTML = "";
    }
  } else if (timeLeft <= -1000 * 3600 * 24) {
    heading.innerHTML = "Countdown Finished";
    for (let i = 0; i < number.length; i++) {
      number[i].innerHTML = "";
    }
  } else {
    days.innerHTML = formatTime(daysNumber);
    hours.innerHTML = formatTime(hoursNumber);
    minutes.innerHTML = formatTime(minutesNumber);
    seconds.innerHTML = formatTime(secondsNumber);
  }
}

function formatTime(time) {
  if (time < 10) {
    time = "0" + time;
    return time;
  }
  return time;
}

countdown();

setInterval(countdown, 1000);
