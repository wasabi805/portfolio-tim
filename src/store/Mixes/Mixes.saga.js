import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { TRACK_LIST } from '../../constants/routeConstants';

export function* fetchTrackListingSaga(){
    try{
        const response = yield call(
            ()=> axios.get( TRACK_LIST ).then(
                (res)=> res)
        );

        yield put({
            type: "UPDATE_TRACK_LISTING",
            payload: response.data
        })
    }catch (e) {
        console.log('there was an error in fetchTrackListingSaga ' , e)
    }
}

export function* fetchMix01Saga() {

}

