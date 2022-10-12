'use strict';

const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let forecast = '';
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i];
        forecast = forecast.concat(`... ${temp}º in ${i + 1} days `);
    }
    console.log(forecast);
}

printForecast(temperatures2);
