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

export const chooseCurrentList = (data) => ({
  type: birdsActionTypes.CHOOSE_CURRENT_LIST,
  payload: data,
});
