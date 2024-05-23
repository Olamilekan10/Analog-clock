const numberHours = document.querySelector('.number-hours');

const numberElement = [];

// create number hours
for (let i = 0; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    ); 
}

numberHours.insertAdjacentHTML('afterbegin', numberElement.join(""));
console.log(numberElement);