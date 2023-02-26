const meterToFeet = 3.281
const literToGallon = 0.264
const kilosToPound = 2.204
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {

  // converting length
  let totalFeet = inputEl.value * meterToFeet;
  let totalMeter = inputEl.value / meterToFeet;
  let lengthTotal = `${inputEl.value} meters = ${totalFeet.toFixed(3)} feet | ${
    inputEl.value
  } feet = ${totalMeter.toFixed(3)} meters`;
  lengthEl.innerHTML = lengthTotal;

  // converting volume
  let totalGallons = inputEl.value * literToGallon;
  let totalLiters = inputEl.value / literToGallon;
  let volumeTotal = `${inputEl.value} liters = ${totalGallons.toFixed(
    3
  )} gallons | ${inputEl.value} gallons = ${totalLiters.toFixed(3)} liters`;
  volumeEl.innerHTML = volumeTotal;

  // converting volume
  let totalPounds = inputEl.value * kilosToPound;
  let totalKilograms = inputEl.value / kilosToPound;
  let massTotal = `${inputEl.value} kilos = ${totalPounds.toFixed(
    3
  )} pounds | ${inputEl.value} pounds = ${totalKilograms.toFixed(3)} kilos`;
  massEl.innerHTML = massTotal;
});
