import { newsTypes } from "./newsTypes";

export const fetchNews = () => ({
  type: newsTypes.IS_FETCHING_NEWS
});

export const nextNewsArticle = () => ({
  type: newsTypes.NEXT_ARTICLE
});

export const prevNewsArticle = () => ({
  type: newsTypes.PREVIOUS_ARTICLE
})