


// Finding Wind Chill

window.onload = defineWindChill()
function defineWindChill() {
    
        //Input:
        let fahrenheit = parseFloat(document.querySelector('.temp').value);
        let windSpeed = parseFloat(document.querySelector('.windSpeed').value);

        //Processing:
        let windChillOutput = windChill(fahrenheit, windSpeed);

        //Output:
            document.querySelector('.windChill').innerHTML = windChillOutput;
    }

    function windChill(fahrenheit, windSpeed) {
        // let fahrenheit = parseFloat(document.getElementById('inputBoxOne').value);
        // let windSpeed = parseFloat(document.getElementById('inputBoxTwo').value);
        let windChillOutput = 35.74 + 0.6215 * fahrenheit - 35.75 * windSpeed ** 0.16 + 0.4275 * fahrenheit * windSpeed ** 0.16
        if (fahrenheit <= 50 and windSpeed > 3) {
            return windChillOutput;
        } else {
            windChillOutput = 'N/A';
            return windChillOutput;
        }
    }