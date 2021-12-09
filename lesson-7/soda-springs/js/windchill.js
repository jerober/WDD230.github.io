
// Finding Wind Chill

window.onload = defineWindChill()
function defineWindChill() {
    
        //Input:
        var fahrenheit = parseFloat(document.querySelector('.temp').textContent);
        let windSpeed = parseFloat(document.querySelector('.windSpeed').textContent);

        //Processing:
        let windChillOutput = windChill(fahrenheit, windSpeed);

        //Output:
        document.querySelector('.windChill').innerHTML = windChillOutput;
    }

    function windChill(fahrenheit, windSpeed) {
        // let fahrenheit = parseFloat(document.getElementById('inputBoxOne').value);
        // let windSpeed = parseFloat(document.getElementById('inputBoxTwo').value);

        let windChillOutput = "N/A";

        if (fahrenheit <= 50 && windSpeed > 3) {
            windChillOutput = 35.74 + 0.6215 * fahrenheit - 35.75 * windSpeed ** 0.16 + 0.4275 * fahrenheit * windSpeed ** 0.16
            windChillOutput = windChillOutput.fixed(2);
        }
        return windChillOutput;

    }