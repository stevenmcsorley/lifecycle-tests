import { BusRouteData } from '../typings/IBusStop.types';

// Define a variable to store the route data
let globalRouteData: BusRouteData = {
    stops: [],
};

// Function to set the route data
export function setRouteData(routeData: BusRouteData) {
    console.log("Setting route data:", routeData);
  globalRouteData = routeData;
}

// Function to get the route data
export function getRouteData(): BusRouteData | null {
    console.log("Getting route data:", globalRouteData);
  return globalRouteData;
}
