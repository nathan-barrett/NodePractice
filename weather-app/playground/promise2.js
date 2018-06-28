const request = require('request');


const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address)
        request({
        	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        	json: true,
        }, (error, response, body) => {
        	if (error) {
        		reject("Unable to connect to the Google Servers.");
        	} else if (body.status === "ZERO_RESULTS") {
        		reject("Unable to locate address.")
        	} else if (body.status === "OK") {
        		resolve({
        			address: body.results[0].formatted_address,
        			latitude: body.results[0].geometry.location.lat,
        			longitude: body.results[0].geometry.location.lng,
        		})
        	}
        })
        })
};

geocodeAddress('97217').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (err) => {
    console.log(err)
});