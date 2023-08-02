import { BusStop } from "../../typings/IBusStop.types";
import { formatTime } from "./dateFormatter";
import { setRouteData } from "../globalData";

export interface StopSummary {
  routeSegment: string;
  name: string;
  startAddress: string;
  durationText: string;
  arrivalTime: Date;
}

// Helper function to generate the summary for each stop as an object
export const generateStopSummary = (
  stop: BusStop,
  leg: google.maps.DirectionsLeg,
  routeSegment: string,
  currentTime: Date
) => {
  const summary: StopSummary = {
    routeSegment,
    name: stop.name,
    startAddress: leg.start_address,
    durationText: leg.duration?.text ?? "Unknown",
    arrivalTime: new Date(currentTime),
  };

  if (leg.duration) {
    currentTime.setSeconds(currentTime.getSeconds() + leg.duration.value);
    summary.arrivalTime = new Date(currentTime);
  }

  console.log("SUMARRRRRYYY",summary);

  return summary;
};

// Function to calculate the start time of the route
export const calculateStartTime = (
  route: google.maps.DirectionsRoute,
  stops: BusStop[]
) => {
  // Calculate the total duration of the entire route
  const totalDuration = route.legs.reduce((total, leg) => total + (leg.duration?.value || 0), 0);

  // Calculate the start time based on the end time of the last stop
  const endStop = stops[stops.length - 1];
  const endTime = endStop.end_time;
  const startTime = new Date((endTime?.getTime() || Date.now()) - totalDuration * 1000);

  return startTime;
};

// Function to generate the summary data for the entire route
export const generateRouteSummaryData = (
  route: google.maps.DirectionsRoute,
  stops: BusStop[]
): StopSummary[] => {
  const summaryData: StopSummary[] = [];

  // Calculate the total duration of the entire route
  const totalDuration = route.legs.reduce((total, leg) => total + (leg.duration?.value || 0), 0);

  // Calculate the start time based on the end time of the last stop
  const endStop = stops[stops.length - 1];
  const endTime = endStop.end_time;
  const startTime = endTime ? new Date(endTime.getTime() - totalDuration * 1000) : new Date();

  // Initialize the current time with the start time
  let currentTime = new Date(startTime);

  for (let index = 0; index < route.legs.length; index++) {
    const stop = stops[index];
    const leg = route.legs[index];
    const routeSegment = index === 0 ? "Start" : `Stop ${index}`;

    const summary = generateStopSummary(stop, leg, routeSegment, currentTime);
    summaryData.push(summary);

    if (leg.duration) {
      currentTime = new Date(currentTime.getTime() + (leg.duration.value || 0) * 1000); // Calculate the arrival time for the next stop
    }
  }

  // Add the last stop
  const lastLeg = route.legs[route.legs.length - 1];
  const lastStop = stops[stops.length - 1];
  const lastRouteSegment = `Stop ${stops.length}`;
  const lastSummary = generateStopSummary(lastStop, lastLeg, lastRouteSegment, currentTime);
  summaryData.push(lastSummary);

  // Set the route data in the global variable
  setRouteData({ route, stops });

  return summaryData;
};


// Function to display the route summary in the HTML
export const displayRouteSummary = (
  summaryPanel: HTMLElement,
  summaryData: StopSummary[]
) => {
  // Clear previous content
  summaryPanel.innerHTML = "";

  // Display stop details using the summaryData array
  summaryData.forEach((summary, index) => {
    if (summary.routeSegment === "Start") {
      summaryPanel.innerHTML += `<p>${summary.routeSegment} - ${summary.name}: ${summary.startAddress} (${summary.durationText}) - Leave at ${formatTime(
        summary.arrivalTime
      )}</p>`;
    } else if (index === summaryData.length - 1) {
      // Display the last stop's arrival time separately
      summaryPanel.innerHTML += `<p>End ${summaryData.length} - ${summary.name} - Arriving at ${formatTime(summary.arrivalTime)}</p>`;
    } else {
      summaryPanel.innerHTML += `<p>${summary.routeSegment} - ${summary.name}: ${summary.startAddress} (${summary.durationText}) - Arriving at ${formatTime(
        summary.arrivalTime
      )}</p>`;
    }
  });
};
