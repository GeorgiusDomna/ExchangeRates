/**
 * Calculates the average of an array of numbers.
 * @param {number[]} arr - The array of numbers to calculate the average from.
 * @returns {number} - The average of the numbers in the input array. If the input array is empty, returns 0.
 */
export const average = (arr: number[]) => {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);

  return sum / arr.length;
};
