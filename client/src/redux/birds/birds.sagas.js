import axios from "axios";

import { takeLatest, put, all, call } from "redux-saga/effects";

import birdsActionTypes from "./birds.types";

import { fetchInfoFail, fetchInfoSuccess } from "./birds.action";

export function* birdsSagas() {
  yield all([call(onFetchInfoStart)]);
}

export function* onFetchInfoStart() {
  yield takeLatest(birdsActionTypes.FETCH_INFO_START, fetchingInfo);
}

export function* fetchingInfo() {
  try {
    const response = yield axios.get(
      "https://bird-quiz-server.herokuapp.com/getdata"
    );
    yield put(fetchInfoSuccess(response.data));
  } catch (error) {
    yield put(fetchInfoFail(error));
  }
}
