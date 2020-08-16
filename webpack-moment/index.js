import moment from "moment";
const currentTime = moment().format("DD/MM/YYYY HH:mm");
document.querySelector("body").innerHTML = `<h1>Сейчас ${currentTime}</h1>`;
document.querySelector("body").innerHTML += `<h2>${window.location.href}</h2>`;
