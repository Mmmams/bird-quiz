export const getRandomValue = (max) => {
  return Math.floor(Math.random() * max);
};

export const currentBirdsArray = (level, initialArray) => {
  const currentArray = initialArray.slice((level - 1) * 6, level * 6);
  return currentArray;
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
