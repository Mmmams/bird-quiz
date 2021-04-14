import { all, call } from "redux-saga/effects";
import { birdsSagas } from "./birds/birds.sagas";
import { userSaga } from "./user/user.sagas";
export default function* rootSaga() {
  yield all([call(birdsSagas), call(userSaga)]);
}
