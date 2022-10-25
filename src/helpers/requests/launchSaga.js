import axios from 'axios';
import { select, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/lib/constants';

import api from '../../api/apiConfig';

const authSelector = (state) => state.signIn;

export default function* launchSaga(action) {
  if (action) {
    const { response } = action.payload;


    yield (api.defaults.headers.Authorization = `Bearer ${response.access_token}`);

  } else {

    try {
      yield take(REHYDRATE);

      const state = yield select(authSelector);

      const { access_token, refresh_token } = state;

      if (access_token) {
        axios.defaults.headers.Authorization = `Bearer ${access_token}`;
        api.defaults.headers.Authorization = `Bearer ${access_token}`;
      }
    } catch (err) {
      yield console.log(err);
    }
  }
}
