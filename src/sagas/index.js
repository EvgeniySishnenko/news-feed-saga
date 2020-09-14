import {
  takeLatest,
  put,
  spawn,
  debounce,
  retry,
  call,
  takeEvery,
  delay,
} from "redux-saga/effects";
import {
  searchNewsRequest,
  searchNewsSuccess,
  searchNewsFailure,
} from "../actions/actionCreators";
import {
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
} from "../actions/actionTypes";
import { searchNews } from "../api/index";

// worker
export function* workerLoadData() {
  try {
    const data = yield call(searchNews);
    yield put(searchNewsSuccess(data));
  } catch (error) {
    yield call(workerLoadData);
    return yield delay(3000);
  }
}

// watcher
export function* watchLoadData() {
  yield takeEvery(SEARCH_NEWS_SUCCESS, workerLoadData);
}

export default function* saga() {
  yield spawn(watchLoadData);
}
