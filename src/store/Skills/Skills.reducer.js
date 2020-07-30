import { handleActions } from 'redux-actions';
import actions from '../Skills/Skills.actions';

const initialStore = {
    cards: []
}
export default handleActions({
    [actions.somePlaceholder] : ( state ) =>({
        ...state
    }),

    [actions.updateSkillsList] :( state , { payload } )=>{
        return ({
            ...state,
            cards: payload,
        })
    },

}, initialStore)