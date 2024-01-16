const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const number = document.querySelectorAll(".number");
const heading = document.getElementById("heading");
const countdownContainer = document.querySelector(".countdown-container");

function countdown() {
  const currentDate = new Date();

  if (currentDate.getMonth() === 0 && currentDate.getDate() === 1) {
    heading.innerHTML = `<h1 id="heading" style="color:red">
        Happy New Year!
        <span class="party-popper">🎉</span>
      </h1>`;
    countdownContainer.style.display = "none";
  } else {
    showTime();
    countdownContainer.style.display = "";
  }
}

function formatTime(time) {
  if (time < 10) {
    time = "0" + time;
    return time;
  }
  return time;
}

function showTime() {
  const currentDate = new Date();
  const currentYear = new Date().getFullYear();
  const newYearsDay = `1 Jan ${currentYear + 1} `;
  const newYearsDate = new Date(newYearsDay);
  const timeLeft = newYearsDate - currentDate;

  const daysNumber = Math.floor(timeLeft / 1000 / 3600 / 24);
  const hoursNumber = Math.floor((timeLeft / 1000 / 3600) % 24);
  const minutesNumber = Math.floor((timeLeft / 1000 / 60) % 60);
  const secondsNumber = Math.floor((timeLeft / 1000) % 60);

  days.innerHTML = formatTime(daysNumber);
  hours.innerHTML = formatTime(hoursNumber);
  minutes.innerHTML = formatTime(minutesNumber);
  seconds.innerHTML = formatTime(secondsNumber);
}

countdown();

setInterval(countdown, 1000);
