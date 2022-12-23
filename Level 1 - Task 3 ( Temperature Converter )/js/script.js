
let celsius = document.getElementById('celsius-ip');
let kelvin = document.getElementById('kelvin-ip');
let farh = document.getElementById('farh-ip');

celsius.oninput = () => {
    kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(2);
    farh.value = (parseFloat(celsius.value)*(9/5) + 32).toFixed(2);
}

kelvin.oninput = () => {
    celsius.value = (parseFloat(kelvin.value) - 273.15).toFixed(2);
    farh.value = ((parseFloat(kelvin.value) - 273.15)*(9/5) + 32).toFixed(2);
}

farh.oninput = () => {
    celsius.value = ((parseFloat(farh.value)-32)*(5/9)).toFixed(2);
    kelvin.value = ((parseFloat(farh.value)-32)*(5/9) + 273.15).toFixed(2);
}