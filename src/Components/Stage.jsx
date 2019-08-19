import React from 'react';
import PropTypes from 'prop-types'

import './Stage.sass'

const Stage = (props) =>
  <div className="stage">
    <div className="name">{props.name}</div>
    <div className="log">
      Quam. Nunc ante. Nulla mi nulla, vehicula nec,
      ultrices a, tincidunt vel, enim.  Suspendisse potenti. Aenean sed.
    </div>
  </div>

export Stage
