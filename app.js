let date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const allMonths = [
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

let today = new Date();
console.log(today);

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allMonths[today.getDay()];
year.innerHTML = today.getFullYear();
