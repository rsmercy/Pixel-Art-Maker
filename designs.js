
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	
	// Your code goes here!
	
	// Select size input
	
	var vas, cols, Height, Width, rows;
	
		vas = $('#pixelCanvas');
			Height = $('#inputHeight').val();
				Width = $('#inputWeight').val();
		
		vas.children().remove()
	
				for (x = 0; x < Height; x++) {
		vas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
				for (y = 0; y < Width; y++) {
	rows.append('<td></td>');
	} 
	
	cols = vas.find('td');
	
	// change color of td, when clicked
			cols.click(function() {

		// Select color input

			var color;
				color = $("#colorPicker").val();
					$(this).attr('bgcolor', color);
	});
	
}

// call makeGrid() perform function of size submitted
	var submitQuery;

		submitQuery = $('input[type="submit"]')
	
			submitQuery.click(function(event) {
  				event.preventDefault();
  					makeGrid();
});

