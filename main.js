const secondHandWrapper = document.querySelector('.hands-second-wrapper');
const minuteHandWrapper = document.querySelector('.hands-minute-wrapper');

let secondInterval = 6;
setInterval(() => {
  secondInterval += 6;
  secondHandWrapper.style.transform = `rotate(${secondInterval}deg)`;
}, 1000);

let minuteInterval = 6;
setInterval(() => {
  minuteInterval += 6;
  minuteHandWrapper.style.transform = `rotate(${secondInterval}deg)`;
}, 1000);

const day = document.querySelector('.calendar-day');
const date = document.querySelector('.calendar-date');
const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

day.innerText = weekday[new Date().getDay()];
date.innerText = new Date().getDate();
