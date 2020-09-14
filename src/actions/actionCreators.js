import {
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_FAILURE,
  SEARCH_NEWS_SUCCESS,
  MORE_NEWS_FIELD,
} from "./actionTypes";

export const searchNewsRequest = (search) => ({
  type: SEARCH_NEWS_REQUEST,
  payload: { search },
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
