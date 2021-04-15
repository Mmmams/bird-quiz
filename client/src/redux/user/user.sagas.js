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
  getLevelFail,
  getLevelSuccess,
  resetLevelSuccess,
  resetLevelFail,
} from "./user.actions";

export function* userSaga() {
  yield all([
    call(onSignUpStart),
    call(onLoginStart),
    call(onUpdateLevelStart),
    call(onGetLevelStart),
    call(onResetLevelStart),
  ]);
}

export function* onResetLevelStart() {
  yield takeLatest(userActionTypes.RESET_LEVEL_START, resetLevelStart);
}

export function* resetLevelStart({ payload }) {
  const email = payload;
  try {
    const level = yield fetch(
      "https://bird-quiz-server.herokuapp.com/resetLevel",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const currentLevel = yield level.json();
    yield put(resetLevelSuccess(currentLevel));
  } catch (error) {
    yield put(resetLevelFail(error));
  }
}

export function* onGetLevelStart() {
  yield takeLatest(userActionTypes.GET_LEVEL_START, getLevelStart);
}

export function* getLevelStart({ payload }) {
  const email = payload;
  try {
    const level = yield fetch(
      "https://bird-quiz-server.herokuapp.com/getLevel",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const currentLevel = yield level.json();
    yield put(getLevelSuccess(currentLevel));
  } catch (error) {
    yield put(getLevelFail(error));
  }
}

export function* onUpdateLevelStart() {
  yield takeLatest(userActionTypes.UPDATE_LEVEL_START, updateLevelStart);
}

export function* updateLevelStart({ payload }) {
  const { email } = payload;
  try {
    const level = yield fetch(
      "https://bird-quiz-server.herokuapp.com/updateLevel",
      {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      }
    );
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
    const user = yield fetch("https://bird-quiz-server.herokuapp.com/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const currentUser = yield user.json();

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
    const res = yield fetch("https://bird-quiz-server.herokuapp.com/signup", {
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
