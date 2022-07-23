let birthday = new Date(2007, 4, 4, 0, 0, 0, 0);
let currentDay = new Date();
let age = currentDay.getFullYear() - birthday.getFullYear();
let month = currentDay.getMonth() - birthday.getMonth();
let day = currentDay.getDate() - birthday.getDate();

document.querySelector(".yearsold").textContent = age;
