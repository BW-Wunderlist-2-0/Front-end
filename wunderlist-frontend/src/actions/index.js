// Actions index.js


/*dependencies*/
import axios from "axios";

import axiosWithAuth from '../utilities/axiosWithAuth';

/*named consts for typo-proofing*/

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FAILED_TO_FETCH = "FAILED_TO_FETCH";

/*actions*/

export const fetchList = () => dispatch => {
  dispatch({ type: FETCH_LOADING });

  // axios.get('some end point')
  // .then(res => dispatch({ type: FETCH_LIST_SUCCESS, payload: res.whateverdatashapeis }))
  // .catch(err => dispatch({ type: FAILED_TO_FETCH, payload: err }))
};


