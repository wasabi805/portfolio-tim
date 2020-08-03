import { handleActions } from 'redux-actions';
import actions from './Mixes.actions';

const initialStore={
    newTrackList : '',
    initialTrack : null,
    trackList : []
}

export default handleActions({
    [actions.updateTrackListing] :( state , { payload } )=>{
        return{
            ...state,
            trackList: payload,
            initialTrack: payload[0]
        }
    },

    [actions.setInitialTrack] :( state, { payload } )=>{
        return{
            ...state,
            initialTrack: payload
        }
    },

}, initialStore)

