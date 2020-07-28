import { combineReducers } from 'redux';
import experience from '../store/Experience/Experience.reducer';
import projects from '../store/Projects/Projects.reducer';
import skills from '../store/Skills/Skills.reducer';
import mixes from '../store/Mixes/Mixes.reducer'

const rootReducer = combineReducers({
    experience,
    projects,
    skills,
    mixes,
});

export default rootReducer
