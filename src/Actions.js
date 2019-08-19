
export const types = {
  UPDATE_SCRREN: 'UPDATE_SCRREN',
  STAGE_FETCH_REQUESTED: 'STAGE_FETCH_REQUESTED',
  STAGE_FETCH_FAIL: 'STAGE_FETCH_FAIL',
  PLAN_REQUESTED: 'PLAN_REQUESTED',
  PLAN_SUCCESSED: 'PLAN_SUCCESSED',
  PLAN_FAILED: 'PLAN_FAILED',
  BRANCH_FILTER: 'BRANCH_FILTER',
  CLEAR: 'CLEAR_CO2'
}

export function planRequest() {
  return { type: types.PLAN_REQUESTED }
}

export function planSuccessed(plans) {
  return { type: types.PLAN_SUCCESSED, payload: plans }
}

export function planFailed() {
  return { type: types.PLAN_FAILED }
}

export function clearRoom() {
  return { type: types.CLEAR }
}
