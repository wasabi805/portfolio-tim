import { createActions } from 'redux-actions';

const mixesActions = createActions(
    'FETCH_TRACK_LISTING',
    'UPDATE_TRACK_LISTING',
    'FETCH_MIX_01'
)

export default mixesActions