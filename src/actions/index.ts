import { fork } from 'redux-saga/effects'
import { watchAuth } from './auth/sagas'

export default function* rootSaga() {
  yield fork(watchAuth)
}