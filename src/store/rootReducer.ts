import { combineReducers } from 'redux';
import bankReducer from './Bank/bankReducer';

const rootReducer = combineReducers({
    banks : bankReducer
})

export default rootReducer;