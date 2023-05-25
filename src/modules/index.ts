import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import post, { postSaga } from "./post";
const RootReducer = combineReducers({ post, auth });
export default RootReducer;
export function* rootSaga() {
  yield all([postSaga(), authSaga()]);
}
export type RootState = ReturnType<typeof RootReducer>;
