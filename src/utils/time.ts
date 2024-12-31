export function isOneHourLater(timestamp: string): boolean {
  // Parse the given timestamp into a Date object
  const givenTime = new Date(timestamp);

  // Get the current time
  const currentTime = new Date();

  // Check if current time is at least 1 hour later than the given timestamp
  const oneHourLater = new Date(givenTime.getTime() + 60 * 60 * 1000); // Add 1 hour in milliseconds

  return currentTime >= oneHourLater;
}