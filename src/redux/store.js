import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
