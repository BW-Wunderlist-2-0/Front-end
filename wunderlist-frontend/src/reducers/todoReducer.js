import * as actionType from '../actions';

const initialTodoState = {
  authState: {
    isAuthenticating: false,
    currentUser: null,
    errorMessage: null
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

const todoReducer = (state = initialTodoState, action) => {
  switch (actionType) {
    case actionType.FETCH_LOADING:
      return {
        ...state,
        dataFetching: {
          ...state.dataFetching,
          isLoading: true,
          error: ""
        }
      };
    case actionType.FETCH_LIST_SUCCESS:
      return {
        ...state,
        dataFetching: {
          ...state.dataFetching,
          isLoading: false,
          error: ""
        }
      };
    case actionType.FAILED_TO_FETCH:
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
}

export default todoReducer;