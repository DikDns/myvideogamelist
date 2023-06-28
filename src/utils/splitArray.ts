/**
 * Splits an array into smaller arrays of a given length.
 * @param array - The array to be split.
 * @param chunkSize - The desired length of each subarray.
 * @returns An array of smaller arrays, where each subarray has a length of chunkSize.
 */

export default function splitArray<T>(array: T[], chunkSize: number): T[][] {
  const splitArrays: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    splitArrays.push(chunk);
  }

  return splitArrays;
}
