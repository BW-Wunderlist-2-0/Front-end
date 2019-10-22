import { combineReducers } from 'redux'

import loginReducer from './loginReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  loginReducer, todoReducer
})

export default rootReducer;