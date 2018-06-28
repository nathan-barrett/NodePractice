const request = require('request');

const getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/2aacb64976fcf44f1835bb1f4c662e7d/${lat},${long}`,
        json: true,
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        } else {
            callback("Unable to connect to the Weather Servers.");
        }
    })
}

module.exports.getWeather = getWeather;