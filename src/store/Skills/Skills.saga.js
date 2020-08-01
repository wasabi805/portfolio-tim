import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { SKILLS_LIST } from "../../constants/routeConstants";

export function* fetchSkillsListSaga() {
    try{
        const response = yield call(()=> axios.get( SKILLS_LIST ).then(
                ( res) => res)
        );

        yield put({
            type: "UPDATE_SKILLS_LIST",
            payload: response.data
        })

    }catch (e) {
        console.log('there was an error in fetchSkillsListSaga ' , e)
    }
}