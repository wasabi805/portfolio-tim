import { combineReducers } from 'redux';
import experience from '../store/Experience/Experience.reducer';
import projects from '../store/Projects/Projects.reducer';
import skills from '../store/Skills/Skills.reducer'

const rootReducer = combineReducers({
    experience,
    projects,
    skills,
});

export default rootReducer
