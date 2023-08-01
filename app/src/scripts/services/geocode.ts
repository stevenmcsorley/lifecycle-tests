import { BusStop } from "../../typings/IBusStop.types";

export const getGeocodeResults = (stops: BusStop[]): Promise<google.maps.GeocoderResult[]> => {
  const geocoder = new google.maps.Geocoder();

  const geocodePromises: Promise<google.maps.GeocoderResult>[] = stops.map((stop) =>
    new Promise((resolve, reject) => {
      geocoder.geocode({ address: stop.name }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results[0]) {
          resolve(results[0]);
        } else {
          reject(status);
        }
      });
    })
  );

  return Promise.all(geocodePromises);
};
