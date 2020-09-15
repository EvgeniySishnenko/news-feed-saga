import {
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_FAILURE,
  SEARCH_NEWS_SUCCESS,
  MORE_NEWS_FIELD,
} from "./actionTypes";

export const searchNewsRequest = () => ({
  type: SEARCH_NEWS_REQUEST,
});

export const searchNewsFailure = (error) => ({
  type: SEARCH_NEWS_FAILURE,
  payload: { error },
});

export const searchNewsSuccess = (items) => ({
  type: SEARCH_NEWS_SUCCESS,
  payload: { items },
});
export const moreNewsFiled = (items) => ({
  type: MORE_NEWS_FIELD,
  payload: { items },
});
