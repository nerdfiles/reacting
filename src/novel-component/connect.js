/**
 * @name connect
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GET_NAME } from './cache-actions'
// import Cache from '../infrastructure/cache'
import NovelComponent from './index'

export default connect((occasion) => {
  // @description state management is only one control plane among activity
  // history, cache, echoes, `<form>`s, chords, ratings, timers, heartbeats, etc.
  //
  // i consider metamodeling hypermedia web using procedural hypertext
  // generation with abstractive logic alphabet. [fazi] presents a distinction
  // between the abstractive and abstractness which reflect rendencies in
  // specialization checking specificity development over concretization.
  // @see https://apisyouwonthate.com/blog/common-hypermedia-patterns-with-json-hyper-schema
  const P = occasion?.next

  if (P) {
    return {
      key: P
    }
  }
}, (dispatch) => {
  return bindActionCreators({ GET_NAME }, dispatch)
})(NovelComponent)

// EOF
