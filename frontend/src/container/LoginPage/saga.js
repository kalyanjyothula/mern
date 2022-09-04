import axios from 'axios';
import { takeLatest, call, put } from "redux-saga/effects";
import { loginUser, loginUserFail, loginUserSuccess } from './reducer';


export function* loginUserAsync({ payload }) {
  const { email, password } = payload;
  console.log("saga Called !")
  const url = '/api/user/loginUser';
  try {
    const { data: { success, token, _id: id, name } } = yield call(axios,
      { method: 'POST', data: { email, password }, url });
    // console.log(success, token, id, name)
    if (success) {
      yield window.localStorage.setItem('user', JSON.stringify({ id, name, email, token }))
      yield put(loginUserSuccess({ id, name, email, token }))
    }
    else yield put(loginUserFail())
  } catch (error) {
    console.log(error)
    yield put(loginUserFail())
  }
}

export const loginPageSaga = [takeLatest(loginUser.type, loginUserAsync)]