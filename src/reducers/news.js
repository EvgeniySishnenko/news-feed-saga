import {
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_FAILURE,
  SEARCH_NEWS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_NEWS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case SEARCH_NEWS_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
