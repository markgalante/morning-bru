import { newsTypes } from "./newsTypes";

const INITIAL_NEWS_STATE = {
  isFetchingNews: false,
  newsFetchSuccess: "",
  newsFetchFailure: ""
};

export const newsReducer = (state = INITIAL_NEWS_STATE, action) => {
  switch (action.type) {
    case newsTypes.IS_FETCHING_NEWS:
      return {
        ...state,
        isFetchingNews: true
      };

    case newsTypes.NEWS_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingNews: false,
        newsFetchSuccess: action.payload,
        newsFetchFailure: ""
      };

    case newsTypes.NEWS_FETCH_FAIL:
      return {
        ...state,
        isFetchingNews: false,
        newsFetchSuccess: "",
        newsFetchFailure: action.payload
      };
    default:
      return state;
  }
};
