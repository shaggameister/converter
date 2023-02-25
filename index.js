/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  // converting length
  let totalFeet = inputEl.value * 3.281;
  let totalMeter = inputEl.value / 3.281;
  let lengthTotal = `${inputEl.value} meters = ${totalFeet.toFixed(3)} feet | ${
    inputEl.value
  } feet = ${totalMeter.toFixed(3)} meters`;
  lengthEl.innerHTML = lengthTotal;
  // converting volume
  let totalGallons = inputEl.value * 0.264;
  let totalLiters = inputEl.value / 0.264;
  let volumeTotal = `${inputEl.value} liters = ${totalGallons.toFixed(
    3
  )} gallons | ${inputEl.value} gallons = ${totalLiters.toFixed(3)} liters`;
  volumeEl.innerHTML = volumeTotal;
  // converting volume
  let totalPounds = inputEl.value * 2.204;
  let totalKilograms = inputEl.value / 2.204;
  let massTotal = `${inputEl.value} kilograms = ${totalPounds.toFixed(
    3
  )} pounds | ${inputEl.value} pounds = ${totalKilograms.toFixed(3)} kilograms`;
  massEl.innerHTML = massTotal;
});
