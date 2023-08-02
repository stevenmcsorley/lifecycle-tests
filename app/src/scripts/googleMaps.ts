import { BusStop } from "../typings/IBusStop.types";
import { getGeocodeResults } from "./services/geocode";
import { calculateRoute } from "./services/directions";
import { displayRouteSummary, generateRouteSummaryData } from "./services/routeSummary";
import { addMarkersOnMap } from "./services/mapMarkers";

export const plotRouteOnMap = async (map: google.maps.Map, stops: BusStop[]) => {
  const geocodeResults = await getGeocodeResults(stops);
  const directionsResult = await calculateRoute(geocodeResults);

  const directionsRenderer = new google.maps.DirectionsRenderer({
    map,
    suppressMarkers: true,
  });
  directionsRenderer.setDirections(directionsResult);

  const route = directionsResult.routes[0];
  console.log("Route:", route);

  const summaryPanel = document.getElementById("routeStatusPanel");
  if (summaryPanel) {
    const summaryData = generateRouteSummaryData(route, stops);
    displayRouteSummary(summaryPanel, summaryData);
  }

  addMarkersOnMap(map, stops, geocodeResults);
};
