import axios from "axios";

import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "./user.types";

import { signUpFail, signUpSuccess } from "./user.actions";

export function* userSaga() {
  yield all([call(onSignUpStart)]);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpStart);
}

export function* signUpStart({ payload }) {
  const { email, password } = payload;

  try {
    const user = yield fetch("http://localhost:5000/signup", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const currentUser = yield user.json();
    console.log(currentUser);
    if (currentUser.message) {
      yield put(signUpFail(currentUser.message));
    } else {
      yield put(signUpSuccess(currentUser));
    }
  } catch (err) {
    yield put(signUpFail(err));
  }
}
