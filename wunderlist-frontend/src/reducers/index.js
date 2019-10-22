// Reducers index.js

/*dependencies*/
import { LOADING, FETCH_LIST_SUCCESS, FAILED_TO_FETCH } from "../actions";

const initialState = {
  tasks: [
    {
      userid: 1,
      id: 1,
      item: "",
      datemade: "",
      recurring: false
    },
    {
      userid: 1,
      id: 2,
      item: "",
      datemade: "",
      recurring: false
    }
  ],
  isLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        tasks: action.payload
      };
    case FAILED_TO_FETCH:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;