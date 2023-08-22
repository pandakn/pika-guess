export const generateRandomNumbers = (
  count: number,
  min: number,
  max: number
): number[] => {
  const randomNumbers: number[] = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};
