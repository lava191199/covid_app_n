import { all } from 'redux-saga/effects';
import covidReportsSaga from './covid/saga';

export default function* rootSaga() {
    yield all([

        //public
        covidReportsSaga(),


    ])
}