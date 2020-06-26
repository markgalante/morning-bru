import { combineReducers } from "redux";

import { jokesReducer } from "./jokes/jokesReducer";
import { newsReducer } from "./news/newsReducer";

export const rootReducer = combineReducers({
  jokes: jokesReducer,
  news: newsReducer
});
