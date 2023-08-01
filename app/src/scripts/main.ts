// Import the necessary files and modules here
import { plotRouteOnMap } from './googleMaps';
import { BusRouteData } from '../typings/IBusStop.types';
import { simulateRoute } from './routeSimulation';
import { handleCSVUpload } from './upload';

// Set up necessary event listeners and logic here
window.addEventListener('DOMContentLoaded', () => {
  // Your event listener and logic for initializing the app here

  // Example Usage:
  const csvFileInput = document.getElementById('csvFileInput') as HTMLInputElement | null;

  let map: google.maps.Map | null = null; // Define the map variable to hold the Google Map object

  csvFileInput?.addEventListener('change', () => {
    const file = csvFileInput?.files?.item(0);

    if (file instanceof File) {
      handleCSVUpload(file)
        .then((busRouteData: BusRouteData) => {
          // Extract the start time from the first row of busRouteData
          // const startTime = busRouteData.stops[0]?.end_time ?? '08:00'; // Default to '08:00' if end_time is missing
          // busRouteData.stops.shift(); // Remove the first element from the stops array (it's the start time)

          // Call other functions for Google Maps and simulation based on busRouteData
          if (!map) {
            // Create the map if it doesn't exist yet
            map = new google.maps.Map(document.getElementById('map')!, {
              center: { lat: 55.86515, lng: -4.25763 }, // Replace with your desired center coordinates
              zoom: 13, // Adjust the zoom level as needed
            });
          }
          plotRouteOnMap(map, busRouteData.stops);

          // Call the simulateRoute function here, inside the then block
         
        })
        .catch((error) => {
          console.error('Error parsing CSV file:', error);
        });
    } else {
      console.error('No file selected or invalid file type.');
    }
  });

  // The simulateRoute() function will no longer be called here
  // since it's already called inside the then block of handleCSVUpload().

  const playRouteButton = document.getElementById('playRouteButton') as HTMLButtonElement | null;
  if (!playRouteButton) {
    return;
  }
  playRouteButton.addEventListener('click', () => {
    simulateRoute();
    // Call the function to start the route simulation
    // For example: startSimulation();
  });
});
