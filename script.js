
const buttons = document.querySelectorAll('.widget-49-meeting-item button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});


document.querySelector('.widget-49-meeting-item button').classList.add('active');


function getDirections(destinationLat, destinationLng) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;
            var googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;

            window.open(googleMapsUrl, '_blank');
        }, function(error) {
            alert('Error getting your location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}



function getDirectionsFromActiveButton() {
    var activeButton = document.querySelector('.widget-49-meeting-points .btn.active');
    
    if (activeButton) {
        var destinationLat = activeButton.getAttribute('data-lat');
        var destinationLng = activeButton.getAttribute('data-lng');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var userLat = position.coords.latitude;
                var userLng = position.coords.longitude;
                var googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;

                window.open(googleMapsUrl, '_blank');
            }, function(error) {
                alert('Error getting your location: ' + error.message);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    } else {
        alert('Please select a location.');
    }
}


var buttonss = document.querySelectorAll('.widget-49-meeting-points .btn');
buttonss.forEach(function(button) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


function handleButtonClick(targetId) {
    document.getElementById(targetId).style.display = 'block';
    document.getElementById('nextStepButton'+targetId).innerHTML = 'Done';
}

