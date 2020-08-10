import { handleActions } from 'redux-actions';
import actions from '../Projects/Projects.actions';

const initialStore = {
    stuff: 'things',
    projects:[]
}

export default handleActions({
    [actions.somePlaceholder] : ( state )=>({
        ...state
    }) ,

    [actions.updateProjectsList] : ( state, { payload } )=>{
        return({
            ...state,
            projects: payload.projects
        })
    }

}, initialStore)