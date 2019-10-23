import * as actionType from '../actions';

const initialTodoState = {
  dataFetching: {
    isLoading: false,
    error: "",
  },
  tasks: [
    {
      userid: 1,
      id: 1,
      item: "Water Plants",
      dateCreated: 1571759424652,
      completed: false,
      recurring: false,
      recurringFrequency: 'monthly'
    },
    {
      userid: 1,
      id: 2,
      item: "Laundry",
      dateCreated: 1571759441517,
      recurring: false,
      recurringFrequency: 'weekly'
    }
  ]
};


const todoReducer = (state = initialTodoState, action) => {
  switch (actionType) {
    case actionType.GET_TASKS_START:
      return {
        ...state,
        dataFetching: {
          ...state.dataFetching,
          isLoading: true,
          error: ""
        }
      };
    case actionType.GET_TASKS_SUCCESS:
      return {
        ...state,
        dataFetching: {
          ...state.dataFetching,
          isLoading: false,
          error: ""
        },
        tasks: action.payload.tasks
      };
    case actionType.GET_TASKS_FAILURE:
      return {
        ...state,
        dataFetching: {
          ...state.dataFetching,
          isLoading: false,
          error: action.payload
        }
      };

    default:
      return state;
  }
}

export default todoReducer;