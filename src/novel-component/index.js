/**
 * @filepath ./src/novel-component/index.js
 * @author aha <patagnome@protonmail.com>
 * @license wtfpl, version 2
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @fileoverview a web component-ish thing for reactjs generally expected to 
 * present a https://schema.org/WebActivityHistory at some point.
 * @name NovelComponent
 * @kind Class
 * @description a web component which minimally presents an interactionCounter.
 */
import React, { createStore } from 'react'
import WebCache from './web-cache'
import './index.scss'

const __interface__ = createStore(WebCache)

/**
 * @name task
 * @description example,
 * ```
 * { type: 'GET_KEY' }
 * ```
 * .
 * @function
 * @param {CustomEvent} e - .
 */
const task = (e) => {
  /**
   * @constant
   * @default
   * @example
   * const COMMAND = 'GET_KEY'
   */
  const COMMAND = 'POST_KEY'

  const command = {
    type: COMMAND
  }

  __interface__.dispatch(command)

  e.preventDefault()
}

class NovelComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div
        {...this.props}
        className='m-view--novel-component__default__'
        onClick={task}
      >
        component copy
      </div>
    )
  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  componentWillUpdate (nextProps, nextState) {
  }

  componentDidUpdate (prevProps, prevState) {
  }

  componentWillUnmount () {
  }
}

NovelComponent.propTypes = {
  ID: React.PropTypes.number,
  startTime: React.PropTypes.string,
  endTime: React.PropTypes.string,
  location: React.PropTypes.string,
  interactionType: React.PropTypes.string,
  interactionService: React.PropTypes.string
}

const taskCommands = {}

taskCommands['https://schema.org/InteractionCounter'] = {
  interactionCount: 0
}

NovelComponent.defaultProps = taskCommands

export default NovelComponent

// EOF
