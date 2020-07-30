import { combineReducers } from 'redux';
import projects from '../store/Projects/Projects.reducer';
import skills from '../store/Skills/Skills.reducer';
import mixes from '../store/Mixes/Mixes.reducer'

const rootReducer = combineReducers({
    projects,
    skills,
    mixes,
});

export default rootReducer
