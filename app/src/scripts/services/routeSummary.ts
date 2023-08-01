import { BusStop } from "../../typings/IBusStop.types";
import { formatTime } from "./dateFormatter";
import { setRouteData, getRouteData } from "../globalData"; // Import setRouteData function

export interface StopSummary {
  routeSegment: string;
  name: string;
  startAddress: string;
  durationText: string;
  arrivalTime: Date;
}

// Helper function to generate the summary for each stop as an object


// Function to generate the summary data for the entire route
// Helper function to generate the summary for each stop as an object
const generateStopSummary = (
  stop: BusStop,
  leg: google.maps.DirectionsLeg,
  routeSegment: string,
  currentTime: Date
) => {
  const summary: any = {
    routeSegment,
    name: stop.name,
    startAddress: leg.start_address,
    durationText: leg.duration?.text ?? "Unknown",
    arrivalTime: currentTime,
  };

  if (leg.duration) {
    currentTime = new Date(currentTime.getTime() + (leg.duration.value || 0) * 1000);
    summary.arrivalTime = currentTime;
  }

  return summary;
};

// Function to generate the summary data for the entire route
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

  // Set the route data in the global variable
  setRouteData({ route, stops });

  return summaryData;
};


// Function to display the route summary in the HTML
export const displayRouteSummary = (
  summaryPanel: HTMLElement,
  route: google.maps.DirectionsRoute,
  stops: BusStop[]
) => {
  // Clear previous content
  summaryPanel.innerHTML = "";

  // Calculate the total duration of the entire route
  const totalDuration = route.legs.reduce((total, leg) => total + (leg.duration?.value || 0), 0);

  // Calculate the start time based on the end time of the last stop
  const endStop = stops[stops.length - 1];
  const endTime = endStop?.end_time;
  const startTime = new Date((endTime ?? new Date()).getTime() - totalDuration * 1000);
  
  // Display start time
  summaryPanel.innerHTML += `<p>Start: ${formatTime(startTime)}</p>`;

  // Generate the summary data for the entire route
  const summaryData = generateRouteSummaryData(route, stops);

  console.log('globalData', getRouteData());

  // Display stop details using the summaryData array
  summaryData.forEach((summary, index) => {
    if (summary.routeSegment === "Start") {
      summaryPanel.innerHTML += `<p>${summary.routeSegment} - ${summary.name}: ${summary.startAddress} (${summary.durationText}) - Leave at ${formatTime(
        summary.arrivalTime
      )}</p>`;
    } else if (index === summaryData.length - 1) {
      // Display the last stop's arrival time separately
      summaryPanel.innerHTML += `<p>End ${stops.length} - ${summary.name} - Arriving at ${formatTime(summary.arrivalTime)}</p>`;
    } else {
      summaryPanel.innerHTML += `<p>${summary.routeSegment} - ${summary.name}: ${summary.startAddress} (${summary.durationText}) - Arriving at ${formatTime(
        summary.arrivalTime
      )}</p>`;
    }
  });
};
