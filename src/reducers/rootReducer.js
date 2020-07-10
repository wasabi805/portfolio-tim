import { combineReducers } from 'redux';
import experience from '../store/Experience/Experience.Reducer';

const rootReducer = combineReducers({
    experience,
});

export default rootReducer
