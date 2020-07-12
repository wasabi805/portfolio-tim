import { combineReducers } from 'redux';
import experience from '../store/Experience/Experience.reducer';
import projects from '../store/Projects/Projects.reducer'

const rootReducer = combineReducers({
    experience,
    projects,
});

export default rootReducer
