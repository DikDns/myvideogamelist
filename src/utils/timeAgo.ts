/**
 * Formats the provided date as hours and minutes ago.
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date as hours and minutes ago.
 */
export default function timeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  // If the difference is more than an hour, return the hours ago.
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  // If the difference is more than a minute, return the minutes ago.
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  // Otherwise, return "just now".
  return "just now";
}
