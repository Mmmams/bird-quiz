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
