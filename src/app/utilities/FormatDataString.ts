export const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));

export function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(":").map(Number);

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM or 12 PM

  return `${formattedHours}:${minutes?.toString()?.padStart(2, "0")} ${period}`;
}
