// Get Mobilize API jsonData
// cleaned up 3:09pm Sunday April 25, 2021
// Thank you so much Jonathan you are a genius and a kind person!!!

var request = new XMLHttpRequest();

request.open('GET', 'https://api.mobilize.us/v1/organizations/7229/events?is_virtual=false&address_visibility=PUBLIC');

request.onload = function() {

	var map = L.map('map', {
		center: [39.0, -94.0],
		minZoom: 4,
		zoom: 4
	})

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		subdomains: ['a', 'b', 'c']
	}).addTo(map)

	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(mapDataToMarkers(parsedData.data));
	const markers = mapDataToMarkers(parsedData.data);
	for (var i = 0; i < markers.length; ++i) {
		L.marker([markers[i].lat, markers[i].lng])
			.bindPopup('<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>')
			.addTo(map);
	}



};


request.send();

function mapDataToMarkers(data) {

	const markers = [];
	for (let x = 0; x < data.length; x++) {
		console.log(data[x]);
		if (data[x].location && data[x].location.location) {
			markers.push({
				"name": data[x].location.venue,
				"url": data[x].browser_url,
				"lat": data[x].location.location.latitude,
				"lng": data[x].location.location.longitude
			})
		}
	}
	return markers;

}
