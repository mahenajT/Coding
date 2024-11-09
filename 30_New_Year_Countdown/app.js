const date = document.getElementById("date");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const year = document.querySelector(".year");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown();
function updateCountdown() {
  const currentTime = new Date().getTime();
  // console.log(now, newYearTime); // milliSeconds
  const timeRemaining = newYearTime - currentTime;
  console.log(timeRemaining); // Gap(Time seconds) gets smaller

  const OneSeconds = 1000; // 1 seconds = 1000 milliseconds
  const OneMinutes = OneSeconds * 60; // Actually 60,000 milliseconds [There are 60 seconds in a minute]
  const OneHour = OneMinutes * 60; // 3,600,000 milliseconds [There are 60 minutes in an hour]
  const OneDay = OneHour * 24; // 86,400,000 milliseconds [There are 24hours in a day]

  let daysRemaining = Math.floor(timeRemaining / OneDay);
  console.log(daysRemaining);

  let hoursRemaining = Math.floor((timeRemaining % OneDay) / OneHour);
  console.log(hoursRemaining);

  let minutesRemaining = Math.floor((timeRemaining % OneHour) / OneMinutes);
  console.log(minutesRemaining);

  let secondsRemaining = Math.floor((timeRemaining % OneMinutes) / OneSeconds);
  console.log(secondsRemaining);

  daysRemaining = daysRemaining < 10 ? "0" + daysRemaining : daysRemaining;
  hoursRemaining = hoursRemaining < 10 ? "0" + hoursRemaining : hoursRemaining;
  minutesRemaining =
    minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining;
  secondsRemaining =
    secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining;

  date.innerText = daysRemaining;
  hour.innerText = hoursRemaining;
  minutes.innerText = minutesRemaining;
  seconds.innerText = secondsRemaining;
  setTimeout(updateCountdown, 1000);
}
