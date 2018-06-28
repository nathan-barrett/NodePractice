const yargs = require('yargs');
const axios = require('axios')

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true,
		},
	})
	.help()
	.alias('help', 'h')
	.argv;

	const encodedAddress = encodeURIComponent(argv.address)
	const API_KEY = 'AIzaSyAU8gLEHTrq1leDrwquYuZ4MzaLyGHV5N8'
    const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`

    axios.get(geocodeURL).then((response) => {
		if (response.data.status === 'ZERO_RESULTS') {
			throw new Error('Unable to find that address');
		}
		const lat = response.data.results[0].geometry.location.lat;
		const long = response.data.results[0].geometry.location.lng;
		const weatherUrl = `https: //api.darksky.net/forecast/20a8350d3e79a6bcc5606cdbcb9bf1f5/${lat},${long}`
		console.log(response.data.results[0].formatted_address);
		return axios.get(weatherUrl);
    }).then((response) => {
		const temp = response.data.currently.temperature;
		const apparent = response.data.currently.apparentTemperature;
		console.log(`It's currently ${temp}. It feels like ${apparent}`);
	}).catch((e) => {
		if (e.code === 'ENOTFOUND') {
			console.log('Unable to connect to API servers');
		} else {
			console.log(`Error found: ${e.message}`);
		}
	});