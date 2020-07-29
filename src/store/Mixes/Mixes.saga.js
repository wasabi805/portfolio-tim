import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export function* fetchTrackListingSaga(){
    try{
        const response = yield call( ()=>
            axios.get('http://localhost:5000/api/tracks/track-list').then( (res)=>{
                return(res)
            }))
        yield put({
            type: "UPDATE_TRACK_LISTING",
            payload: response.data
        })

    }catch (e) {
        console.log('there was an error in fetchTrackListingSaga ' , e)
    }

    console.log('Hello Sagas!')
}