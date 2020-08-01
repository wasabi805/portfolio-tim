import { handleActions } from 'redux-actions';
import actions from './Mixes.actions';

const initialStore={
    newTrackList : '',
    trackList : []
}

export default handleActions({
    [actions.updateTrackListing] :( state , { payload } )=>{
        return{
            ...state,
            trackList: payload
        }
    }
}, initialStore)

