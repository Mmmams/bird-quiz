import axios from "axios";

import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "./user.types";

import {
  signUpFail,
  signUpSuccess,
  loginFail,
  loginSuccess,
  updateLevelFail,
  updateLevelSuccess,
} from "./user.actions";

export function* userSaga() {
  yield all([
    call(onSignUpStart),
    call(onLoginStart),
    call(onUpdateLevelStart),
  ]);
}

export function* onUpdateLevelStart() {
  yield takeLatest(userActionTypes.UPDATE_LEVEL_START, updateLevelStart);
}

export function* updateLevelStart({ payload }) {
  const { email } = payload;
  try {
    const level = yield fetch("http://localhost:5000/updateLevel", {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    const currentLevel = yield level.json();
    yield put(updateLevelSuccess(currentLevel));
  } catch (error) {
    yield put(updateLevelFail(error));
  }
}

export function* onLoginStart() {
  yield takeLatest(userActionTypes.LOGIN_START, loginStart);
}

export function* loginStart({ payload }) {
  const { email, password } = payload;

  try {
    const user = yield fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const currentUser = yield user.json();
    console.log(currentUser);
    if (currentUser.message) {
      yield put(loginFail(currentUser.message));
    } else {
      yield put(loginSuccess(currentUser));
    }
    localStorage.setItem("user", JSON.stringify(currentUser));
  } catch (err) {
    yield put(loginFail(err));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpStart);
}

export function* signUpStart({ payload }) {
  const { email, password } = payload;

  try {
    const res = yield fetch("http://localhost:5000/signup", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const response = yield res.json();
    console.log(response);
    if (response.message) {
      yield put(signUpFail(response.message));
    } else if (response.success) {
      yield put(signUpSuccess(response.success));
    }
  } catch (err) {
    yield put(signUpFail(err));
  }
}
