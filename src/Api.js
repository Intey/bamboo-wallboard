import _ from 'lodash'

import RESOURCES, { Paths } from './Resources'

import { projectNames } from './Domain/consts'

export function reshape(plans) {
  let grouped = _.groupBy(plans, 'projectName')
  // select projects, only on 
  const keys = _.filter(Object.keys(grouped), 
                        (k) => !!projectNames.find((e) => k.startsWith(e)))
  grouped = _.pick(grouped, keys)

  /* make structure for each project: 
     projectName: status: '[{ planName: status: 'bool', branches: [{ branchName: { status} }] }]
   */
  const result = keys.map( k => {
    let plans = grouped[k]
    const branches = plans.map(p => p.plan.branches)
  })

  console.log("RESULT", result)

  return grouped
}

export function getPlans() {
  const URL = RESOURCES.PLAN_BRANCHES
  return fetch(URL)
    .then( (res) => {
      const json = res.json()
      if (!json)
      {
        console.warn("empty response from" , URL)
        return [ ]
      }
      return json
    })
    .then( json => reshape(_.at(json, Paths.results)[0]) )
    .catch( (err) => console.error(err) )
}
