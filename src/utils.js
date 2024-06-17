export default (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};

export const getRandomIndex = (array) => {
  const max = array.length - 1;
  return Math.floor(Math.random() * (max + 1));
};