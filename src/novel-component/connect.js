/**
 * @name connect
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ACTION_NAME } from './actions'
// import reducers from './reducers'
import NovelComponent from './index'

export default connect((state) => {
  return {
    key: state.key
  }
}, (dispatch) => {
  return bindActionCreators({ ACTION_NAME }, dispatch)
})(NovelComponent)

// EOF
