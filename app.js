// js
const tilt = $('.js-tilt').tilt();
tilt.on('change', function(e, transforms){});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022,9,24, 11,30,0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
let month = months[futureDate.getMonth()];


const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Time left: ${weekday} , ${date} ,${month}, ${year}, ${hours}:${minutes} am`;

// future time in ms

const futureTime  = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(oneDay);
  const oneHour = 60 * 60 * 1000;
  console.log(oneHour);
  const oneMinute = 60 * 1000;

  let days = t/oneDay;
  days = Math.floor(days);
  console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minute = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minute, seconds];

  function format(item){
    if (item < 10){
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  })
  if (t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = "expired">You late</h4>`;
  }
}

let countdown = setInterval(getRemainingTime,1000);
