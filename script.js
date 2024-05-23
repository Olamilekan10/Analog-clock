const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barlement = [];

// create number hours
for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    ); 
}

numberHours.insertAdjacentHTML('afterbegin', numberElement.join(""));

// create bar seconds
