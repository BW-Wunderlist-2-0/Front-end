import * as actionType from '../actions';

const initialState = {
  displayedTasks: [],
  showCompleted: false,
  searchTerm: '',
  filterByTime: '',
  showMenu: false,
  addItemModal: false,
}


const uiReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionType.SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      }
    case actionType.SET_TIMELINE_FILTER:
      return {
        ...state,
        filterByTime: action.filter
      }
    case actionType.TOGGLE_COMPLETION_FILTER:
      return {
        ...state,
        showCompleted: !state.showCompleted
      }
    case actionType.TOGGLE_ADD_ITEM:
      return {
        ...state,
        addItemModal: !state.addItemModal
      }
    case actionType.TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      }
    default:
      return state;
  }
}

export default uiReducer;