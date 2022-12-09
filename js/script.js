
function tempConverter() {

    let temp = parseFloat(document.getElementById('temp-ip').value);
    let ipUnit = document.getElementById('unit-ip').value;
    let opUnit = document.getElementById('unit-op').value;
    var res = 0;
    var unit = null;
    
    if(ipUnit==="celsius"){
        if(opUnit==="kelvin") {
            res = temp + 273.15;
            unit = "°K"
        }
        else if(opUnit==="fahrenheit") {
            res = temp*(9/5) + 32;
            unit = "°F"
        } 
        else {
            res = temp;
            unit = "°C"
        }
    }
    
    else if(ipUnit==="kelvin"){
        if(opUnit==="celsius") {
            res = temp - 273.15;
            unit = "°C"
        }
        else if(opUnit==="fahrenheit") {
            res = (temp - 273.15)*(9/5) + 32;
            unit = "°F"
        } 
        else {
            res = temp;
            unit = "°K"
        }
    }
    
    else{
        if(opUnit==="celsius") {
            res = (temp-32)*(5/9);
            unit = "°C"
        }
        else if(opUnit==="kelvin") {
            res = (temp-32)*(5/9) + 273.15;
            unit = "°K"
        } 
        else {
            res = temp;
            unit = "°F"
        }
    }

    document.getElementById('result').innerHTML = `Result: ${res.toFixed(2)} ${unit}`;
}