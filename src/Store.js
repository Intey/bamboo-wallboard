import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { types, planRequest, clearRoom } from './Actions'
import rootSaga from './Sagas'

import { blinkIntervalMinutes, blinkTimeMinutes } from './Domain/consts'

const initialStore = {
  projects: {
    "Project": [
      {
        planName: "Build Plan",
        plan: {
          branches: {
            branch:
              [
                {
                  shortName: "branch(master)",
                  latestResult:{ buildState: "Unknown" },
                },
              ]
          },
        },
      },
    ],
  },
  branchMaxCount: 8
}

// const newStore = {
//   projects:[
//     {
//       name: "",
//       plans: [],
//     },
//   ],
//   plans: [
//     {
//       name: "",
//       status: "",
//     }
//   ],
//   branches: [
//     {
//       name: "",
//       status: "",
//       log: "",
//     }
//   ]
// }


export function planReducer(state=initialStore, action) {
  switch(action.type) {
    case types.PLAN_SUCCESSED:
      return action.payload
    case types.PLAN_REQUESTED:
      return state
    default:
      return state
  }
}

const ping = store => next => action => {
  // console.log(`LOG. Type: ${action.type}, payload: ${action.payload}`)
  return next(action)
}

const sagaMiddleware = createSagaMiddleware()

export function blinkBackground() {
    let body = document.querySelector('body')
    let millsInSecs = (s) => s * 1000 * 60

    return setInterval(() => { 
      body.classList.add('blinker')

      setTimeout(() => { 
        body.classList.remove('blinker')
      }, millsInSecs(blinkTimeMinutes))

      // interval should include blinkTimeMinutes, 'couze they start async
    }, millsInSecs(blinkIntervalMinutes + blinkTimeMinutes))
}

function blinkReducer(state=0, action) {
  if (action.type === types.CLEAR)
  {
    return blinkBackground()
  }
  return state
}


function branchCountReducer(state=8, action) {
  return state
}

const rootReducer = combineReducers({
  projects: planReducer, 
  blinkInterval: blinkReducer,
  branchMaxCount: branchCountReducer
})

export const store = createStore(rootReducer, initialStore, applyMiddleware(ping, sagaMiddleware))

sagaMiddleware.run(rootSaga)


setInterval(store.dispatch, 2000, planRequest())
store.dispatch(clearRoom())
