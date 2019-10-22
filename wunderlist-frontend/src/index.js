/*dependencies*/
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

/*components*/
import "./index.css";
import App from "./App";
import { reducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
);

/*store*/

ReactDOM.render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById("root")
);
