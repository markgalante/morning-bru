import { newsTypes } from "./newsTypes";

export const fetchNews = () => ({
  type: newsTypes.IS_FETCHING_NEWS
});
