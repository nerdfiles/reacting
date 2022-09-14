/**
 * @name connect
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GET_NAME } from './actions'
// import Cache from '../infrastructure/cache'
import NovelComponent from './index'

export default connect((occasion) => {
  // @description state management is only one control plane among activity 
  // history, cache, echoes, forms, chords, ratings, timers, heartbeats, etc.
  // @see https://apisyouwonthate.com/blog/common-hypermedia-patterns-with-json-hyper-schema
  if (occasion && occasion['next']) {
    return {
      key: occasion && occasion.next
    }
  }
}, (dispatch) => {
  return bindActionCreators({ GET_NAME }, dispatch)
})(NovelComponent)

// EOF
