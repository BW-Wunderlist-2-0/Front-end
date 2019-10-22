// Reducers index.js

/*dependencies*/
import { FETCH_LOADING, FETCH_LIST_SUCCESS, FAILED_TO_FETCH } from "../actions";

const initialState = {
  loginStatus: {
    loggingIn: false,
    loggedIn: false
  },
  tasks: [
    {
      userid: 1,
      id: 1,
      item: "Water Plants",
      dateCreated: 1571759424652,
      recurring: false
    },
    {
      userid: 1,
      id: 2,
      item: "Laundry",
      dateCreated: 1571759441517,
      recurring: false
    }
  ],
  dataFetching: {
    isLoading: false,
    error: ""
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        dataFetching: {
          ...state.dataFetching,
          isLoading: true,
          error: ""
        }
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        dataFetching: {
          ...state.dataFetching,
          isLoading: false,
          error: ""
        }
      };
    case FAILED_TO_FETCH:
      return {
        ...state,
        dataFetching: {
          ...state.dataFetching,
          isLoading: false,
          error: ""
        }
      };

    default:
      return state;
  }
};

export default reducer;