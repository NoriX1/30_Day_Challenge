const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;

  seconds == 0 ? secondHand.style.transitionDuration = '0s' : secondHand.style.transitionDuration = '.2s';
  minutes == 0 ? minHand.style.transitionDuration = '0s' : minHand.style.transitionDuration = '.2s';
  hours == 0 ? hourHand.style.transitionDuration = '0s' : hourHand.style.transitionDuration = '.2s';

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);