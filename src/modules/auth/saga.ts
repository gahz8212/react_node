import { takeLatest, call, put } from "redux-saga/effects";
import * as authAPI from "../../api/authAPI";
import * as actions from "./actions";
function* loginSaga(action: ReturnType<typeof actions.login.request>) {
  try {
    const response: { data: authAPI.authData } = yield call(
      authAPI.login,
      action.payload
    );
    yield put(actions.login.success(response.data));
  } catch (e: any) {
    put(actions.login.failure(e));
  }
}
function* joinSaga(action: ReturnType<typeof actions.join.request>) {
  try {
    yield call(authAPI.join, action.payload);
  } catch (e: any) {
    put(actions.join.failure(e));
  }
}
export function* authSaga() {
  yield takeLatest(actions.LOGIN, loginSaga);
  yield takeLatest(actions.JOIN, joinSaga);
}
