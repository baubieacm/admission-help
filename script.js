
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
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;
            var googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;

            window.open(googleMapsUrl, '_blank');
        }, function (error) {
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
            navigator.geolocation.getCurrentPosition(function (position) {
                var userLat = position.coords.latitude;
                var userLng = position.coords.longitude;
                var googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;

                window.open(googleMapsUrl, '_blank');
            }, function (error) {
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
buttonss.forEach(function (button) {
    button.addEventListener('click', function () {
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


function handleButtonClick(targetId) {
    document.getElementById(targetId).style.display = 'block';
    document.getElementById('nextStepButton' + targetId).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>';


    var button = document.getElementById('nextStepButton' + targetId);
    button.style.color = 'green';
    button.style.backgroundColor = 'white';
    button.style.border = '0';
    button.style.borderRadius = '100px';
    button.disabled = true;

    window.location.hash = targetId;

}

