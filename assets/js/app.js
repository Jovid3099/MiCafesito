let map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 13.675875, lng: -89.279226},
		zoom: 17,
		scaleControl: true,
	});

	const marker = new google.maps.Marker({
		position: {lat: 13.675875, lng: -89.279226},
		map: map,
	});

	const infowindow = new google.maps.InfoWindow({
		content: '<p>Gran Dragon Rojo</p>',
	});

	google.maps.event.addListener(marker, 'click', () => {
		infowindow.open(map, marker);
	});
}

window.initMap = initMap;
