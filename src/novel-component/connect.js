/**
 * @name connect
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ACTION_NAME } from './actions'
// import reducers from './reducers'
import NovelComponent from './index'

export default connect((state) => {
  const KEY = state['key']

  return {
    key: KEY
  }
}, (dispatch) => {
  return bindActionCreators({ ACTION_NAME }, dispatch)
})(NovelComponent)

// EOF
