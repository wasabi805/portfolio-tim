import { fetchTrackListingSaga } from "../store/Mixes/Mixes.saga";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        fetchTrackListingSaga()
    ])
}