// Import the necessary files and modules here
import { plotRouteOnMap } from './googleMaps';
import { BusRouteData } from '../typings/IBusStop.types';
import { simulateRoute } from './routeSimulation';
import { handleCSVUpload } from './upload';

window.addEventListener('DOMContentLoaded', () => {

  const csvFileInput = document.getElementById('csvFileInput') as HTMLInputElement | null;

  let map: google.maps.Map | null = null;

  csvFileInput?.addEventListener('change', () => {
    const file = csvFileInput?.files?.item(0);

    if (file instanceof File) {
      handleCSVUpload(file)
        .then((busRouteData: BusRouteData) => {
          if (!map) {
            map = new google.maps.Map(document.getElementById('map')!, {
              center: { lat: 55.86515, lng: -4.25763 },
              zoom: 13,
            });
          }
          plotRouteOnMap(map, busRouteData.stops);
         
        })
        .catch((error) => {
          console.error('Error parsing CSV file:', error);
        });
    } else {
      console.error('No file selected or invalid file type.');
    }
  });

  const playRouteButton = document.getElementById('playRouteButton') as HTMLButtonElement | null;
  if (!playRouteButton) {
    return;
  }
  playRouteButton.addEventListener('click', () => {
    simulateRoute();
  });
});
