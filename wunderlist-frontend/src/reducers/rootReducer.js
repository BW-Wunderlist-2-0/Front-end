import { combineReducers } from 'redux'

import loginReducer from './loginReducer';
import todoReducer from './todoReducer';
import uiReducer from './uiReducer';
// import editReducer from './editReducer';

const rootReducer = combineReducers({
  loginReducer, todoReducer, uiReducer
})

export default rootReducer;