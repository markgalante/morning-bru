import { takeLatest, put, all } from "redux-saga/effects";
import { jokesTypes } from "../jokes/jokesTypes";
import { newsTypes } from "../news/newsTypes";

// const jokeURL = "http://api.icndb.com/jokes/random/";

//WORKER SAGA:
function* fetchJoke() {
  const joke = yield fetch("https://api.icndb.com/jokes/random/")
    .then(response => response.json())
    .then(joke => joke.value.joke);
  yield console.log(joke);
  yield put({
    type: jokesTypes.FETCH_JOKE_SUCCESS,
    payload: joke
  });
}

function* fetchNews() {
  const newsArticle = yield fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=bef6b5318f3f48b48b453a4c79e0794e"
  )
    .then(res => res.json())
    .then(news => news);
  yield put({
    type: newsTypes.NEWS_FETCH_SUCCESS,
    payload: newsArticle
  });
}

//WATCHER SAGA:
function* jokeActionWatcher() {
  yield takeLatest(jokesTypes.FETCH_JOKE_REQUEST, fetchJoke);
}

function* newsActionWatcher() {
  yield takeLatest(newsTypes.IS_FETCHING_NEWS, fetchNews);
}

export default function* rootSaga() {
  yield all([jokeActionWatcher(), newsActionWatcher()]);
}
