import { call, put, all, takeEvery } from 'redux-saga/effects'

import { getPlans } from './Api'
import { types, planFailed, planSuccessed } from './Actions'

// async function to fetching plan
function* fetchPlans() {
  try {
    const plans = yield call(getPlans)
    yield put( planSuccessed(plans) )
  }
  catch (e) {
    yield put(planFailed())
  }
}

function* plansWatcher() {
  yield takeEvery(types.PLAN_REQUESTED, fetchPlans)
}

export default function* rootSaga() {
  yield all([
    // stagesWatcher(),
    plansWatcher(),
  ])
}

