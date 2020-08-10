import { fetchTrackListingSaga } from "../store/Mixes/Mixes.saga";
import { fetchSkillsListSaga } from "../store/Skills/Skills.saga";
import { fetchMix01Saga } from "../store/Mixes/Mixes.saga";
import { fetchProjectsSaga } from "../store/Projects/Projects.saga";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        fetchTrackListingSaga(),
        fetchSkillsListSaga(),
        fetchMix01Saga(),
        fetchProjectsSaga(),
    ])
}