import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    login: loginReducer,
    tasks:taskReducer
});