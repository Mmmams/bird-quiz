import birdsActionTypes from "./birds.types";

export const fetchImageStart = () => ({
  type: birdsActionTypes.FETCH_IMAGE_START,
});

export const fetchImageSuccess = (imageData) => ({
  type: birdsActionTypes.FETCH_IMAGE_SUCCESS,
  payload: imageData,
});

export const fetchImageFailure = (error) => ({
  type: birdsActionTypes.FETCH_IMAGE_FAILURE,
  payload: error,
});

export const chooseCurrentList = (index) => ({
  type: birdsActionTypes.CHOOSE_CURRENT_LIST,
  payload: index,
});

export const goNextLevelStart = () => ({
  type: birdsActionTypes.GO_NEXT_LEVEL_START,
});

export const goNextLevelSuccess = (nextLevelInfo) => ({
  type: birdsActionTypes.GO_NEXT_LEVEL_SUCCESS,
  payload: nextLevelInfo,
});

export const goNextLevelFailure = (error) => ({
  type: birdsActionTypes.goNextLevelFailure,
  payload: error,
});

export const cleanBirdInfo = () => ({
  type: birdsActionTypes.CLEAN_BIRD_INFO,
});

export const changeNameList = (level) => ({
  type: birdsActionTypes.CHANGE_NAME_LIST,
  payload: level,
});

export const increaseLevel = () => ({
  type: birdsActionTypes.INCREASE_LEVEL,
});

export const increaseScore = (score) => ({
  type: birdsActionTypes.INCREASE_SCORE,
  payload: score,
});

export const chooseCurrentTitle = (index) => ({
  type: birdsActionTypes.CHOOSE_CURRENT_TITLE,
  payload: index,
});

export const chooseCurrentAudio = (index) => ({
  type: birdsActionTypes.CHOOSE_CURRENT_AUDIO,
  payload: index,
});

export const changeAudioList = (level) => ({
  type: birdsActionTypes.CHANGE_AUDIO_LIST,
  payload: level,
});

export const recieveRightAnswer = () => ({
  type: birdsActionTypes.RECIEVE_RIGHT_ANSWER,
});

export const resetAnswer = () => ({
  type: birdsActionTypes.RESET_ANSWER,
});

export const getRandom = (value) => ({
  type: birdsActionTypes.GET_RANDOM,
  payload: value,
});

export const decreaseExtraScore = () => ({
  type: birdsActionTypes.DECREASE_EXTRA_SCORE,
});

export const resetExtraScore = () => ({
  type: birdsActionTypes.RESET_EXTRA_SCORE,
});

export const endGame = () => ({
  type: birdsActionTypes.END_GAME,
});

export const reestGame = () => ({
  type: birdsActionTypes.RESET_GAME,
});

export const changeColor = (index, color) => ({
  type: birdsActionTypes.CHANGE_COLOR,
  payload: { index, color },
});
