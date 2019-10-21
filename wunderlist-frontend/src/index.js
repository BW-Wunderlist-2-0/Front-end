/*dependencies*/
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

/*components*/
import "./index.css";
import App from "./App";
import { reducer } from "./reducers";
import Login from './components';
import PrivateRoute from './src/components/PrivateRoute'

/*store*/
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <PrivateRoute component={Login} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
