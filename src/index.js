import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
