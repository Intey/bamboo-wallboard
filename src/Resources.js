
const BASE_URL = 'http://bamboo.com/rest/api/latest'
// fetch all resutls with all Jobs.


export default {
  PLAN_BRANCHES: `${BASE_URL}/result.json?expand=results.result.plan.branches.branch.latestResult`,
  BRANCH_STAGES: `${BASE_URL}/result.json` /// TODO: find Correct URL
}

export const Paths = {
    results: 'results.result',
    branches: 'branches.branch',


}
