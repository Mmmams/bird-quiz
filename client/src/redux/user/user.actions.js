import userActionTypes from "./user.types";

export const signUpSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFail = (error) => ({
  type: userActionTypes.SIGN_UP_FAIL,
  payload: error,
});

export const signUpStart = (email, password) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: { email, password },
});

export const loginStart = (email, password) => ({
  type: userActionTypes.LOGIN_START,
  payload: { email, password },
});

export const loginSuccess = (user) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error) => ({
  type: userActionTypes.LOGIN_FAIL,
  payload: error,
});

export const updateLevelStart = (email) => ({
  type: userActionTypes.UPDATE_LEVEL_START,
  payload: email,
});

export const updateLevelSuccess = (level) => ({
  type: userActionTypes.UPDATE_LEVEL_SUCCESS,
  payload: level,
});

export const updateLevelFail = (error) => ({
  type: userActionTypes.UPDATE_LEVEL_FAIL,
  payload: error,
});

export const getLevelStart = (email) => ({
  type: userActionTypes.GET_LEVEL_START,
  payload: email,
});

export const getLevelSuccess = (level) => ({
  type: userActionTypes.GET_LEVEL_SUCCESS,
  payload: level,
});

export const getLevelFail = (error) => ({
  type: userActionTypes.GET_LEVEL_FAIL,
  payload: error,
});

export const resetLevelStart = (email) => ({
  type: userActionTypes.RESET_LEVEL_START,
  payload: email,
});

export const resetLevelSuccess = (level) => ({
  type: userActionTypes.RESET_LEVEL_SUCCESS,
  payload: level,
});

export const resetLevelFail = (error) => ({
  type: userActionTypes.RESET_LEVEL_FAIL,
  payload: error,
});

export const setMessage = (message) => ({
  type: userActionTypes.SET_MESSAGE,
  payload: message,
});
