import { takeLatest, put, spawn, debounce, retry } from "redux-saga/effects";
import {
  searchNewsRequest,
  searchNewsSuccess,
  searchNewsFailure,
} from "../actions/actionCreators";
import { SEARCH_NEWS_SUCCESS } from "../actions/actionTypes";
import { searchNews } from "../api/index";

function filterChangeSearchAction({ type, payload }) {
  // return type === CHANGE_SEARCH_FIELD && payload.search.trim() !== "";
  return true;
}

// worker
function* handleChangeSearchSaga(action) {
  yield put(searchNewsRequest(action.payload.search));
}

// watcher
function* watchChangeSearchSaga() {
  yield debounce(100, filterChangeSearchAction, handleChangeSearchSaga);
}

// worker
function* handleSearchSkillsSaga(action) {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000; // ms
    const data = yield retry(
      retryCount,
      retryDelay,
      searchNews,
      action.payload.search
    );
    console.log(data);

    yield put(searchNewsSuccess(data));
  } catch (e) {
    yield put(searchNewsFailure(e.message));
  }
}

// watcher
function* watchSearchSkillsSaga() {
  yield takeLatest(SEARCH_NEWS_SUCCESS, handleSearchSkillsSaga);
}

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga);
}
