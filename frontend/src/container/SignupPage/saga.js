import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  createUserAccount,
  createUserAccountFail,
  createUserAccountSuccess,
} from "./reducer";

export function* createUserAccountAsync({ payload }) {
  const { name, email, password } = payload;
  console.log(name, email, password, "saga");
  const url = "/api/user/register";
  try {
    const {
      data: { success, _id: id, token },
    } = yield call(axios, {
      method: "POST",
      data: { name, email, password },
      url,
    });
    console.log(success, id, token, "saga");
    if (success) {
      yield window.localStorage.setItem(
        "user",
        JSON.stringify({ id, name, email, token })
      );
      yield put(createUserAccountSuccess({ id, name, email, token }));
    } else yield put(createUserAccountFail());
  } catch (error) {
    yield put(createUserAccountFail());
    console.log(error);
  }
}

export const signupPageSaga = [
  takeLatest(createUserAccount.type, createUserAccountAsync),
];
