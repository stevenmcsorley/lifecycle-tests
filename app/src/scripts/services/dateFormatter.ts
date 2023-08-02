// Helper function to format time as HH:mm
export const formatTime = (date: Date) => {
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

// Helper function to parse time string and convert it to a Date object
export function parseTimeStringToDate(timeString: string): Date {
  const [hours, minutes] = timeString.split(':');

  // Check if the timeString contains valid hour and minute values
  const isValidTimeString =
    Number.isInteger(Number(hours)) && Number.isInteger(Number(minutes)) &&
    Number(hours) >= 0 && Number(hours) < 24 &&
    Number(minutes) >= 0 && Number(minutes) < 60;

  // If the timeString is not in the valid format, throw an error
  if (!isValidTimeString) {
    throw new Error('Invalid time string');
  }

  const date = new Date();
  date.setHours(Number(hours), Number(minutes), 0, 0);
  return date;
}

// Utility function to convert duration text to milliseconds
export function parseDurationTextToMilliseconds(durationText: string): number {
  const durationMatch = durationText.match(/(\d+) mins?/);
  if (durationMatch) {
    const minutes = parseInt(durationMatch[1], 10);
    return minutes * 60 * 1000; // Convert minutes to milliseconds
  }
  return 0;
}


// Function to format a duration in milliseconds to a human-readable format
export function formatDurationText(duration: number): string {
  const hours = Math.floor(duration / (60 * 60 * 1000));
  const minutes = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((duration % (60 * 1000)) / 1000);

  // If there are hours, display in "hh:mm:ss" format, otherwise display in "mm:ss" format
  return hours > 0
    ? `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
    : `${padZero(minutes)}:${padZero(seconds)}`;
}

// Helper function to add leading zero to single-digit numbers
export function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}
