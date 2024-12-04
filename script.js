// Add event listener to all buttons in the list
const buttons = document.querySelectorAll('.widget-49-meeting-item button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
  });
});

// Set the first button as active by default
document.querySelector('.widget-49-meeting-item button').classList.add('active');


function getDirections(destinationLat, destinationLng) {
    // Get the user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;

            // Construct Google Maps URL for directions
            var googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;

            // Open the URL in a new tab
            window.open(googleMapsUrl, '_blank');
        }, function(error) {
            alert('Error getting your location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}
