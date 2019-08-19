import React from 'react';
import PropTypes from 'prop-types'

import './Branch.sass'

import { isSuccess } from '../Utils'

const Branch = (props) =>
{
  return (
    <div className={"branch " + isSuccess(props.state)}>
      <div className="name">{props.branchName}</div>
    </div>
  )
}

Branch.propTypes = {
  branchName: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['Successful', 'Failed', 'InProgress', 'Unknown']),
  url: PropTypes.string, // if no string - no show concretics
}

Branch.defaultProps = {
  state: 'Unknown'
}

export default Branch
