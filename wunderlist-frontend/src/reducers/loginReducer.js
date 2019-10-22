// Reducers index.js

/*dependencies*/
import * as actionType from '../actions';
// import jwt_decode from 'jwt-decode'



// const initialState = (token => ({
//   isAuthenticating: false,
//   currentUser: token ? jwt_decode(token) : null,
//   errorMessage: null
// }))(localStorage.authToken)

const initialState = {
  isAuthenticating: false,
  currentUser: null,
  errorMessage: null
}

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionType.LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true

      };
    case actionType.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        errorMessage: action.errorMessage

      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        currentUser: action.user,
        errorMessage: null

      }
    case actionType.LOGOUT:
      return {
        ...state,
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null

      }
    default:
      return state;
  }
}

export default loginReducer;