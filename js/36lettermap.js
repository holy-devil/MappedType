// USE JAVASCRIPT DYNAMIC GRID APPEND :
//             for each in all images in /img/36maps:
//               if count%3==0{
//                 div row open
//               }
//               add image class & col-sm-4 class
//               if count%3==2 or image index = last{
//                 div row close
//               }
//             }

// var rowDiv = document.createElement('div');
// rowDiv.className = 'row';

// // Create the inner div before appending to the body
// var colDiv = document.createElement('div');
// colDiv.className = 'col-sm-4';

// // The variable iDiv is still good... Just append to it.
// rowDiv.appendChild(colDiv);

// // Then append the whole thing onto the body
// document.getElementsById('36mapgrid').appendChild(rowDiv);

for (i = 0; i < 19; i=i+3) {
	var rowDiv = document.createElement('div');
	rowDiv.className = 'row';
	// Create the inner div before appending to the body
	for (j=0; j < 3 && i+j<20; j++){
		var colDiv = document.createElement('div');
		colDiv.className = 'col-sm-4 mapItem';
		imageFileName = "./img/36maps/" + (i+j+10).toString(36) + ".png"
		colDiv.innerHTML += '<img src="'+imageFileName+'" />';
		rowDiv.appendChild(colDiv);
	}
	// Then append the whole thing onto the body
	document.getElementById('lettermapgrid').appendChild(rowDiv);
}