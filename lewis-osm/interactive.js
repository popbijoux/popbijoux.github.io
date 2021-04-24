
var map = L.map( 'map', {
/*
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2
  */

  center: [39.0, -94.0],
  minZoom: 4,
  zoom: 4
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

//////
// control that shows state info on hover
/*
var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
    '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
    : 'Hover over a state');
};

info.addTo(map);
//////

//////

	// get color depending on population density value
	function getColor(d) {
		return d > 1000 ? '#08519c' :
				d > 500  ? '#3182bd' :
				d > 200  ? '#6baed6' :
				d > 100  ? '#9ecae1' :
				d > 50   ? '#c6dbef ' :
				d > 20   ? '#eff3ff' :
				d > 10   ? '#eff3ff' :
							'#eff3ff';

							// #eff3ff #c6dbef #9ecae1 #6baed6 #3182bd #08519c
	}

	function style(feature) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '2',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.density)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 2,
			color: '#f03b20',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

//////

*/



var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

for ( var i=0; i < markers.length; ++i )
{
 L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
  .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
  .addTo( map );
}
