export const getRandomValue = (max) => {
  return Math.floor(Math.random() * max);
};

export const updateCircleColor = (btn, color) => {
  btn[2] = color;
  return btn;
};

export const audioClick = (answer) => {
  const rightAnswer = new Audio("./assets/true.mp3");
  const wrongAnswer = new Audio("./assets/wrong.mp3");
  if (answer) {
    rightAnswer.play();
  } else {
    wrongAnswer.play();
  }
};
