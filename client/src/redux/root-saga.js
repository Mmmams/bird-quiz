import { all, call } from "redux-saga/effects";
import { birdsSagas } from "./birds/birds.sagas";

export default function* rootSaga() {
  yield all([call(birdsSagas)]);
}
