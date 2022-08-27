import { all } from "redux-saga/effects";
import { AppSaga } from "../container/App/saga";
import { loginPageSaga } from "../container/LoginPage/saga";

export function* watcherSaga() {
  // console.log(...AppSaga)
  yield all([...AppSaga, ...loginPageSaga]);
  // yield takeLatest(getUser.type, getUserSaga);
}
