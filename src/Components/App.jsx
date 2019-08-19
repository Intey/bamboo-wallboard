import React from 'react';
import _ from 'lodash'

import './App.sass';

import Plan from './Plan'
import Branch from './Branch'

import { isSuccess } from '../Utils'
import { Paths } from '../Resources'


function get(data, path) { return _.at(data, path)[0] }

function createBranches(plan) {
  const branchesData = get(plan, Paths.branches)
  return branchesData.map((branch, idx) => {
    let state = "Unknown"

    if (branch.latestResult)
    {
      state = branch.latestResult.buildState
      if (branch.latestCurrentlyActive)
        state = 'InProgress'
    }
    else
    {
      console.log(`rendering ${branch.shortName}: no latestResult. Object: `,
        branch)
    }

    return (
      <Branch branchName={branch.shortName}
        state={state}
        key={idx}/>
    )
  })
}
export function App(props) {
  const projects = props.projects
  const keys = Object.keys(projects)
  const views = keys.map( (projectName) => {
    return (
      <div className={"project " + isSuccess(projects[projectName][0].state) } 
           key={projectName}>
        <div className="name">
          {projectName}
        </div>
        <div className="plans">
          {
            projects[projectName].map((plan,idx) => {
              const state = (plan.plan.isBuilding? 'InProgress' : plan.state)
              return (
                <Plan name={plan.planName} state={state} key={idx}>
                  { createBranches(plan.plan) }
                </Plan>
                )
            })
          }
        </div>
      </div>
    )
  })
  return (
    <div className="App">
      <div>
        <button onClick={props.requestUpdate}> Get plans </button>
        <span id="timer"></span>
      </div>
      <div className="projects">
        {views}
      </div>
    </div>
  );
}


export default App;
