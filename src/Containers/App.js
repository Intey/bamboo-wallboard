import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../Components/App';
import { planRequest} from '../Actions'
import { limitBranches } from '../filtering'

function mapStateToProps(state)
{
  return {
    projects: limitBranches(state.projects, state.branchMaxCount)
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    requestUpdate: bindActionCreators(planRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

