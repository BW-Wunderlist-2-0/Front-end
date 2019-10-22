// Actions index.js


/*dependencies*/
import axios from "axios";

import axiosWithAuth from '../utilities/axiosWithAuth';

/*named consts for typo-proofing*/

export const LOGGING_IN = 'LOGGING_IN'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'
export const IS_LOGGED_IN = 'IS_LOGGED_IN'

export const LOADING = "LOADING";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FAILED_TO_FETCH = "FAILED_TO_FETCH";

/*actions*/

export const fetchList = () => dispatch => {
  dispatch({ type: LOADING });

  // axios.get('some end point')
  // .then(res => dispatch({ type: FETCH_LIST_SUCCESS, payload: res.whateverdatashapeis }))
  // .catch(err => dispatch({ type: FAILED_TO_FETCH, payload: err }))
};
