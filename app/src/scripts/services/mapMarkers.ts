import { BusStop } from "../../typings/IBusStop.types";


export const addMarkersOnMap = (
  map: google.maps.Map,
  stops: BusStop[],
  geocodeResults: google.maps.GeocoderResult[]
): void => {
  stops.forEach((stop, index) => {
    const isStartStop = index === 0;
    const isEndStop = index === stops.length - 1;

    new google.maps.Marker({
      position: geocodeResults[index].geometry?.location,
      map,
      title: stop.name,
      label: {
        text: stop.name,
        color: "black",
        fontSize: "14px",
        fontWeight: "bold",
      },
      icon: isStartStop
        ? "https://maps.google.com/mapfiles/kml/paddle/grn-circle.png" // Green circle icon for start
        : isEndStop
        ? "https://maps.google.com/mapfiles/kml/paddle/red-circle.png" // Red circle icon for end
        : "https://maps.google.com/mapfiles/kml/paddle/ylw-circle.png", // Yellow circle icon for other stops
    });
  });
};
