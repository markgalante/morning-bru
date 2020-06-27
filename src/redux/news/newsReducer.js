import { newsTypes } from "./newsTypes";

const INITIAL_NEWS_STATE = {
  isFetchingNews: false,
  newsFetchSuccess: "",
  newsFetchFailure: "", 
  selectedArticle: 0
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
    
    case newsTypes.NEXT_ARTICLE:
      return{
        ...state, 
        selectedArticle: state.newsFetchSuccess.articles.length-1 === state.selectedArticle ? 0 : state.selectedArticle + 1
      }
    
    case newsTypes.PREVIOUS_ARTICLE:
      return{
        ...state,
        selectedArticle: state.selectedArticle === 0 ? state.newsFetchSuccess.articles.length-1 : state.selectedArticle - 1
      }
    default:
      return state;
  }
};
