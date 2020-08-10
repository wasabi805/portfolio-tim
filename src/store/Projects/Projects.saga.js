import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { PROJECTS_LIST } from "../../constants/routeConstants";

export function* fetchProjectsSaga() {
    try{
        const response = yield call(()=>axios.get(PROJECTS_LIST).then(
            (res)=> res )
        );

        yield put({
            type : 'UPDATE_PROJECTS_LIST',
            payload: response.data
        })
    }catch(e){
        console.log('there was an error in fetchProjectsSaga ' , e)
    }
}