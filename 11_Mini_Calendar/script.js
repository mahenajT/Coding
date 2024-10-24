let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
let weekNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];

const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");
const DATE = new Date();

// month.innerHTML = monthNames[DATE.getMonth()];
// dayName.innerHTML = weekNames[DATE.getDay()];
monthName.innerHTML = DATE.toLocaleString("en", { month: "long" });
dayName.innerHTML = DATE.toLocaleString("en", { weekday: "long" });
dayNumber.innerHTML = DATE.getDate();
year.innerHTML = DATE.getFullYear();
