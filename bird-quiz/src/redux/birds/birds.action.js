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
