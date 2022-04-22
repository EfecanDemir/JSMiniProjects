let defaultNumber = 10;
document.getElementById("calcNumber").textContent = defaultNumber;

let resultOne = defaultNumber * 3.28084;
let decimalResultOne = resultOne.toFixed(3);
let calcFeet = document.getElementById("calcFeetEl").textContent = `${defaultNumber} meters = ${decimalResultOne} feet`;

let resultTwo = defaultNumber * 0.3048;
let decimalResulTwo = resultTwo.toFixed(3);
let calcMeter = document.getElementById("calcMeterEl").textContent = `${defaultNumber} feet = ${decimalResulTwo} meters`;

let resultThree = defaultNumber * 0.2641722;
let decimalResultThree = resultThree.toFixed(3);
let calcLiter = document.getElementById("calcLitersEl").textContent = `${defaultNumber} liters = ${decimalResultThree} gallons`;

let resultFour = defaultNumber * 3.785411784;
let decimalResultFour = resultFour.toFixed(3);
let calcGallon = document.getElementById("calcGallonsEl").textContent = `${defaultNumber} gallons = ${decimalResultFour} liters`;

let resultFive = defaultNumber * 2.20462;
let decimalResultFive = resultFive.toFixed(3);
let calcKilos = document.getElementById("calcKilosEl").textContent = `${defaultNumber} kilos = ${decimalResultFive} pounds`;

let resultSix = defaultNumber * 0.453592;
let decimalResultSix = resultFour.toFixed(3);
let calcPounds = document.getElementById("calcPoundsEl").textContent = `${defaultNumber} pounds = ${decimalResultSix} kilos`;

function convert() {
    let newValue = document.getElementById("numberValue").value;
    defaultNumber = newValue;
    document.getElementById("calcNumber").textContent = defaultNumber;

    let calcFeet = document.getElementById("calcFeetEl").textContent = `${defaultNumber} meters = ${decimalResultOne} feet`;
    let calcMeter = document.getElementById("calcMeterEl").textContent = `${defaultNumber} feet = ${decimalResulTwo} meters`;
    let calcLiter = document.getElementById("calcLitersEl").textContent = `${defaultNumber} liters = ${decimalResultThree} gallons`;
    let calcGallon = document.getElementById("calcGallonsEl").textContent = `${defaultNumber} gallons = ${decimalResultFour} liters`;
    let calcKilos = document.getElementById("calcKilosEl").textContent = `${defaultNumber} kilos = ${decimalResultFive} pounds`;
    let calcPounds = document.getElementById("calcPoundsEl").textContent = `${defaultNumber} pounds = ${decimalResultSix} kilos`;
}