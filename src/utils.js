export const getRandomValue = (max) => {
  return Math.floor(Math.random() * max);
};

export const updateCircleColor = (btn, color) => {
  btn[2] = color;
  return btn;
};
