import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';
import watcherRequest from '../helpers/requests/watcherRequest';
import launchSaga from '../helpers/requests/launchSaga';

function* rootSaga() {
  yield all([watcherRequest(), launchSaga()]);
}

export default rootSaga;