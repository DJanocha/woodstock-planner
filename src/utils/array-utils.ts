export const getRandomElement = <T>(array: Readonly<[T, ...T[]]>) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex] as T;
};
