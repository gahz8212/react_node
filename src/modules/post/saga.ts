import { takeLatest, put, call } from "redux-saga/effects";
import * as postAPI from "../../api/postAPI";
import * as actions from "./actions";

function* selectSaga(action: ReturnType<typeof actions.selectImage.request>) {
  try {
    const response: { data: string[] } = yield call(
      postAPI.selectImage,
      action.payload
    );
    yield put(actions.selectImage.success(response.data));
  } catch (e: any) {
    yield put(actions.selectImage.failure(e));
  }
}
function* getSaga() {
  try {
    const response: { data: postAPI.postData[] } = yield call(
      postAPI.getPostList
    );
    yield put(actions.getPostList.success(response.data));
  } catch (e: any) {
    yield put(actions.selectImage.failure(e));
  }
}
export function* postSaga() {
  yield takeLatest(actions.SELECT_IMAGE, selectSaga);
  yield takeLatest(actions.GET_POST_LIST, getSaga);
}
