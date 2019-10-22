/*dependencies*/
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

/*components*/
import "./index.css";
import App from "./App";
import rootReducer from './reducers/rootReducer'

export const browserHistory = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
);

/*store*/

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
