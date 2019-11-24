const secondHandWrapper = document.querySelector('.hands-second-wrapper');

let secondInterval = 6;

setInterval(() => {
  secondInterval += 6;
  secondHandWrapper.style.transform = `rotate(${secondInterval}deg)`;
}, 1000);

const day = document.querySelector('.calendar-day');
const date = document.querySelector('.calendar-date');

const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

day.innerText = weekday[new Date().getDay()];

date.innerText = new Date().getDate();
