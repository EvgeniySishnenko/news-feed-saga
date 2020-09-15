import { put, spawn, call, takeEvery, delay, fork } from "redux-saga/effects";
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
    // return yield delay(100);
    yield call(workerLoadData);
  }
}


export function* watchLoadData() {
  yield takeEvery(SEARCH_NEWS_REQUEST, workerLoadData);

}

export default function* saga() {
  yield spawn(watchLoadData);
}
