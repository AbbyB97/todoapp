import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import taskReducer from './taskReducer';
import taskTypesReducer from './taskTypesReducer';

export default combineReducers({
    login: loginReducer,
    tasks:taskReducer,
    showTaskType:taskTypesReducer
});