export const calculateRoute = (
  geocodeResults: google.maps.GeocoderResult[]
): Promise<google.maps.DirectionsResult> => {
  const directionsService = new google.maps.DirectionsService();
  const waypoints = geocodeResults.slice(1, geocodeResults.length - 1).map((result) => ({
    location: result.geometry?.location,
  }));

  const request: google.maps.DirectionsRequest = {
    origin: geocodeResults[0].geometry?.location,
    destination: geocodeResults[geocodeResults.length - 1].geometry?.location,
    waypoints: waypoints,
    travelMode: google.maps.TravelMode.DRIVING,
  };

  return new Promise((resolve, reject) => {
    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        resolve(result);
      } else {
        reject(status);
      }
    });
  });
};
