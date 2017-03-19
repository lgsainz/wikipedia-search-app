$(document).ready(function() {

	$('#search-btn').click(function() {

		// Get input from user
		var input = $('#search-input').val();

		// Add to API url
		var wikiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + 
		"&format=json&callback=?";

		$.ajax ({
			type: 'GET',
			url: wikiurl,
			async: false,
			dataType: 'json',
			success: function(data) {

				// Make sure url is working
				console.log(data);

				// Blank content for new search display
				$('#results').html("");

				// Loop through json and display results
				for (i = 0; i < data[1].length; i++) {
					$('#results').append("<li><a href=" + data[3][i] + " target='_blank'>" +
						data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
				}

				// Reset search box after each search
				$('#search-input').val("");
			},
			error: function(errorMessage) {
				alert('Error');
			}
		});
	});

	// Display results when pressing Enter key
	$('#search-input').keypress(function(e) {
		if (e.which == 13) {
			$('#search-btn').click();
		}
	});
});