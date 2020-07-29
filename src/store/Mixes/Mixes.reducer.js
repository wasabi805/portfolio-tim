import { handleActions } from 'redux-actions';
import actions from './Mixes.actions';

const initialStore={
    newTrackList : '',

    trackList : []
}

export default handleActions({
    [actions.somePlaceholder] :( state )=>({
        ...state
    }),

    [actions.updateTrackListing] :( state , { payload } )=>{
        return{
            ...state,
            trackList: payload
        }
    }

}, initialStore)

