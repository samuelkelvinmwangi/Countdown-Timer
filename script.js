const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');



const newBeginnings = '1 April 2021';

function countdown() {
    const newBeginningsDate = new Date(newBeginnings);
    const currentDate = new Date();

    const totalseconds = (newBeginningsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = (hours);
    minutesE1.innerHTML = (minutes);
    secondsE1.innerHTML = (seconds);
}

countdown();

setInterval(countdown, 1000)