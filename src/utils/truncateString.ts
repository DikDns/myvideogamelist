/**
 * Truncates a string to a specified length and appends an ellipsis if the string is longer than the specified length.
 * @param str - The string to truncate.
 * @param maxLength - The maximum length of the returned string.
 * @returns The truncated string.
 */
function truncateString(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }

  return str;
}
