// Actions index.js


/*dependencies*/
import jwtDecode from 'jwt-decode';

import { browserHistory } from '../'
import { axiosWithAuth } from '../utilities/axiosWithAuth';


/*named consts for typo-proofing*/

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

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

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_REQUEST })
  console.log(`action login called`)
  axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      console.log(`res aWA in login`, res)
      console.log(`res.data.payload aWA in login`, res.data.payload);
      // localStorage.authToken = res.data.token
      localStorage.setItem('token', res.data.token)
      browserHistory.push('/home')
      dispatch({ type: LOGIN_SUCCESS, user: jwtDecode(res.data.token) })
      browserHistory.push('/home')
    })
    .catch(res => dispatch({ type: LOGIN_FAILURE, errorMessage: res.data.error }))
}

const logout = () => {
  delete localStorage.authToken
  return { type: LOGOUT }
}