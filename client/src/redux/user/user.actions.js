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
