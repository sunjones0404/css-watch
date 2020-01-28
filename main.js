function updateTime() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = (now.getHours() % 12) + min/60;
  const secAngle = sec * 6;
  const minAngle = min * 6;
  const hourAngle = hour * 30;

  const secHand = document.querySelector('.hands-second-wrapper');
  const minHand = document.querySelector('.hands-minute-wrapper');
  const hourHand = document.querySelector(".hands-hour-wrapper");

  secHand.style.transform = `rotate(${secAngle}deg)`;
  minHand.style.transform = `rotate(${minAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;

  setTimeout(updateTime, 1000);
}

updateTime();

// Calendar
const day = document.querySelector('.calendar-day');
const date = document.querySelector('.calendar-date');
const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

day.innerText = weekday[new Date().getDay()];
date.innerText = new Date().getDate();
