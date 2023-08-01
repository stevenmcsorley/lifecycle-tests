import { BusStop, BusRouteData } from '../typings/IBusStop.types';
import { formatTime, parseDurationTextToMilliseconds, formatDurationText } from './services/dateFormatter';
import { getRouteData } from './globalData'; // Import getRouteData function

export function simulateRoute(): void {
  // Retrieve the route data using getRouteData()
  const busRouteData: BusRouteData | null = getRouteData();

  // Check if busRouteData is null and provide a default value
  const stops: BusStop[] = busRouteData?.stops ?? [];
  const route: google.maps.DirectionsRoute | undefined = busRouteData?.route;

  if (!route) {
    console.error('Route data is undefined');
    return;
  }

  // Initialize necessary variables
  let currentStopIndex = 0; // Index of the current stop
  let currentTime = stops[0].end_time ?? new Date(); // Initialize the current time with the start time

  // Map the end_time from route to stops
  stops.slice(0, -1).forEach((stop, index) => {
    // Exclude the last stop
    const legDuration = route.legs[index].duration.text;
    const durationInMilliseconds = parseDurationTextToMilliseconds(legDuration);
    const endTime = new Date(currentTime.getTime() + durationInMilliseconds);
    stop.end_time = endTime;
    currentTime = endTime; // Update currentTime for the next stop
  });

  // Function to update the route status panel with progress and passenger information
  function updateRouteStatusPanel(stop: BusStop) {
    const summaryPanel = document.getElementById('routeStatusPanelUpdate');
    if (summaryPanel) {
      // Clear previous content
      summaryPanel.innerHTML = '';

      // Calculate the remaining time for the current leg
      const currentLeg = route!.legs[currentStopIndex];
      const remainingDuration = currentLeg.duration.value * 1000 - (currentTime.getTime() - stops[currentStopIndex].end_time!.getTime());
      const remainingDurationText = formatDurationText(remainingDuration);

      // Display the countdown timer for the current leg
      summaryPanel.innerHTML += `<p id='remainingTime'>Remaining Time: ${remainingDurationText}</p>`;

      // Display the next stop information
      summaryPanel.innerHTML += `<p>Next Stop: ${stop.name}</p>`;
      // You can also display other information, such as passenger counts, delays, etc.
    }
  }

  // Function to animate the icon along the route
// Function to animate the icon along the route
function animateShuttleToNextStop() {
  const nextStop = stops[currentStopIndex + 1]; // Get the next stop
  console.log('nextStop', nextStop);

  if (!nextStop || nextStop.end_time === null) {
    console.error('Invalid next stop or end_time is null');
    return;
  }

  // Get the duration from the current stop to the next stop in milliseconds
  const duration = parseDurationTextToMilliseconds(route!.legs[currentStopIndex].duration.text);

  // After reaching the next stop, update the current stop index and current time
  currentStopIndex++;
  currentTime = new Date(nextStop.end_time);

  // Call the function to update the route status panel with the new stop information
  updateRouteStatusPanel(nextStop);

  // Function to update the remaining time
  const updateRemainingTime = () => {
    const currentTime = new Date();
    const remainingTime = Math.max(0, (currentTime.getTime() - nextStop.end_time!.getTime()) / 1000);
    const remainingTimeString = formatDurationText(remainingTime);
    const remainingTimeElement = document.getElementById('remainingTime');
    if (remainingTimeElement) {
      remainingTimeElement.innerText = `Remaining Time: ${remainingTimeString}`;
    }
  };

  // Update the remaining time every second
  updateRemainingTime();
  const remainingTimeUpdateInterval = setInterval(updateRemainingTime, 1000);

  // Check if there are more stops to visit
  if (currentStopIndex < stops.length - 1) {
    // If there are more stops, continue the animation loop
    setTimeout(() => {
      clearInterval(remainingTimeUpdateInterval); // Clear the interval to stop updating the remaining time
      animateShuttleToNextStop();
    }, duration);
  } else {
    // If all stops have been visited, end the simulation
    console.log('Simulation completed.');
  }
}


  // Start the animation by calling the animateShuttleToNextStop function
  animateShuttleToNextStop();
}