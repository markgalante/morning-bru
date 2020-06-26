import { jokesTypes } from "./jokesTypes";

const INITIAL_STATE = {
  isFetchingJoke: false,
  joke: "",
  jokeError: ""
};

export const jokesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case jokesTypes.FETCH_JOKE_REQUEST:
      return {
        ...state,
        isFetchingJoke: true
      };
    case jokesTypes.FETCH_JOKE_SUCCESS:
      return {
        ...state,
        isFetchingJoke: false,
        joke: action.payload,
        jokeError: ""
      };
    case jokesTypes.FETCH_JOKE_FAILURE:
      return {
        ...state,
        isFetchingJoke: false,
        joke: "",
        jokeError: action.payload
      };

    default:
      return state;
  }
};
