import { all, call } from "redux-saga/effects";
import { onFetchImageStart } from "./birds/birds.sagas";

export default function* rootSaga() {
  yield all([call(onFetchImageStart)]);
}
