import { jokesTypes } from "./jokesTypes";

export const fetchJokeRequest = () => ({
  type: jokesTypes.FETCH_JOKE_REQUEST
});
