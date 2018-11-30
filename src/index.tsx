import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import App from "./containers/App";
import reducers from "./reducers";
import registerServiceWorker from "./config/registerServiceWorker";
import "./config/globalStyle";

const element: any = document.getElementById("root");

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  element
);

registerServiceWorker();
