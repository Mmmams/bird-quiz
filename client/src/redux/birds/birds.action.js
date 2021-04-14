import birdsActionTypes from "./birds.types";

export const fetchInfoStart = () => ({
  type: birdsActionTypes.FETCH_INFO_START,
});

export const fetchInfoSuccess = (birdInfo) => ({
  type: birdsActionTypes.FETCH_INFO_SUCCESS,
  payload: birdInfo,
});

export const fetchInfoFail = (error) => ({
  type: birdsActionTypes.FETCH_INFO_FAIL,
  payload: error,
});

export const setCurrentBirdArray = (currentBirdArray) => ({
  type: birdsActionTypes.SET_CURRENT_BIRD_ARRAY,
  payload: currentBirdArray,
});

export const setRandomValue = (randomValue) => ({
  type: birdsActionTypes.SET_RANDOM_VALUE,
  payload: randomValue,
});

export const setActiveBird = (bird) => ({
  type: birdsActionTypes.SET_ACTIVE_BIRD,
  payload: bird,
});

export const setQuestionBird = (bird) => ({
  type: birdsActionTypes.SET_QUESTION_BIRD,
  payload: bird,
});

export const setAnswered = () => ({
  type: birdsActionTypes.SET_ANSWERED,
});

export const increaseScore = (exptaScore) => ({
  type: birdsActionTypes.INCREASE_SCORE,
  payload: exptaScore,
});

export const decreaseExtraScore = () => ({
  type: birdsActionTypes.DECREASE_EXPTRA_SCORE,
});

export const resetExtraScore = () => ({
  type: birdsActionTypes.RESET_EXTRA_SCORE,
});

export const resetActiveBird = () => ({
  type: birdsActionTypes.RESET_ACTIVE_BIRD,
});

export const resetGame = () => ({
  type: birdsActionTypes.RESET_GAME,
});

export const fillColorsArray = (colorsArray) => ({
  type: birdsActionTypes.FILL_COLORS_ARRAY,
  payload: colorsArray,
});

export const changeListColor = (color, index) => ({
  type: birdsActionTypes.CHANGE_LIST_COLOR,
  payload: { color, index },
});
