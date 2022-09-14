/**
 * @name connect
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GET_NAME } from './actions'
// import Cache from '../infrastructure/cache'
import NovelComponent from './index'

export default connect((occasion) => {
  if (occasion && occasion['next']) {
    return {
      key: occasion && occasion.next
    }
  }
}, (dispatch) => {
  return bindActionCreators({ GET_NAME }, dispatch)
})(NovelComponent)

// EOF
