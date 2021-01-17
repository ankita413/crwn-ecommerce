//root-reducer represents overall reducers by combining them
import {combineReducers} from 'redux';
import userReducer from './User/user-reducer';

export default combineReducers({
    user: userReducer
})