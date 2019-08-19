import React from 'react';
import PropTypes from 'prop-types'

import Branch from './Branch'
import './Plan.sass'
import _ from 'lodash'

import { isSuccess } from '../Utils'

const Plan = (props) =>
{
  let children = props.children
  if (_.size(props.children) === 0)
  {
    // console.log("no branches in plan", props.name)
    children = <Branch branchName="not found branches" state="Unknown"/>
  }
  else {
    // console.log("branches in plan", props.name, ":", children)
  }

  return (
    <div className={"plan " + isSuccess(props.state)} >
      <div className="name">
        { props.name }
      </div>
      <div className="branches">
        { children }
      </div>
    </div>
  )
}

Plan.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['Successful', 'Failed', 'InProgress'])
}

Plan.defaultProps = {
  state: 'InProgress'
}

export default Plan
