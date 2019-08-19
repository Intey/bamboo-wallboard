import _ from 'lodash'


/* leave only branchMaxCount recent branches in each plan
 *  
 */
export function limitBranches(projects, branchMaxCount) {
  const reslt = _.forOwn(projects, (plans, projectName) => {
    return plans.map( plan => { 

      const branches = _.sortBy(plan.plan.branches.branch, branch => {
        return branch.buildCompletedDate
      }
      ).slice(0, 2)

      const res = {
        plan: { branches: branches },
        planName: plan.planName
      }
      return res
    })
  })
  // console.log("RES", reslt);
  return projects
}
