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
