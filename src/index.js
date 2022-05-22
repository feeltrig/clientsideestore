import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./css/main.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Taskreducer from "./reducers/taskreducer";

let initialstate = [];

let store = createStore(Taskreducer, initialstate);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
