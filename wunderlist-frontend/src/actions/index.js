// Actions index.js
/*dependencies*/
import axios from "axios";

/*named consts for typo-proofing*/

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
