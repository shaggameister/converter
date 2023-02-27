const meterToFeet = 3.281
const literToGallon = 0.264
const kilosToPound = 2.204
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

function render() {
  // converting length
  lengthEl.innerHTML = `${inputEl.value} meters = ${(inputEl.value * meterToFeet).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / meterToFeet).toFixed(3)} meters`;

  // converting volume
  volumeEl.innerHTML = `${inputEl.value} liters = ${(inputEl.value * literToGallon).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / literToGallon).toFixed(3)} liters`;

  // converting volume
  massEl.innerHTML = `${inputEl.value} kilos = ${(inputEl.value * kilosToPound).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / kilosToPound).toFixed(3)} kilos`;
}

convertBtn.addEventListener("click", render);
// inputEl.addEventListener("input", render);
