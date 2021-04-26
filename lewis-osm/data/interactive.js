// Get Mobilize API jsonData
// cleaned up code at 3:09pm Sunday April 25, 2021
// Thank you so much Jonathan you are a genius and a kind person!!!
// 4:31pm Sunday April 25, 2021
// Added City, State, Zip code and text to label

var request = new XMLHttpRequest();

//request.open('GET', 'https://api.mobilize.us/v1/organizations/7229/events');
request.open('GET', 'https://api.mobilize.us/v1/organizations/7229/events?is_virtual=false&per_page=500');


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

			.bindPopup("<h3>John Lewis Votercade</h3>" + '<h3>' + '<a href="' + markers[i].url + '" target="_blank">' + markers[i].locality + "," + " " + markers[i].region + " " + markers[i].zipcode +  '</a>' + '</h3>')
			.addTo(map);
	}



};


request.send();

function mapDataToMarkers(data) {

	const markers = [];
	for (let x = 0; x < data.length; x++) {
		console.log(data[x]);
		if ( data[x].location && data[x].location.location && data[x].location.address_lines ) {
			markers.push({
				"locality": data[x].location.locality,
				"region": data[x].location.region,
				"url": data[x].browser_url,
				"zipcode": data[x].location.postal_code,
				"lat": data[x].location.location.latitude,
				"lng": data[x].location.location.longitude
			})
		}
	}
	return markers;

}
