$(document).ready(function () {
	$(document).ready(function () {
		let apiKey = 'AIzaSyCaZMQYCRQVBvpLuJIdWm0tVlio3c2z1Ps';

		$('form').submit((e) => {
			e.preventDefault();
			let search = $('#search').val();
			videoSearch(apiKey, search, 10);
		});
	});

	function videoSearch(apiKey, search, maxResults) {
		$.get(
			'https://www.googleapis.com/youtube/v3/search?key=' +
				apiKey +
				'&type=video&part=snippet&maxResults=' +
				maxResults +
				'&q=' +
				search,
			(data) => {
				console.log(data);

				let video = '';
				$('#videos').empty();

				data.items.forEach((item) => {
					video = `
				<iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
				`;
					$('#videos').append(video);
				});
			}
		);
	}
});
