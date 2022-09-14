/**
 * @name NovelComponent
 */
import React, { createStore } from 'react'
import Cache from './web-cache'

const __interface__ = createStore(Cache)

const task = (e) => {
  const command = {
    type: 'ACTION_KEY'
  }

  __interface__.dispatch(command)

  e.preventDefault()
}

/**
 * @name NovelComponent
 */
class NovelComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div
        className='m-view--mycomponent__default__' {...this.props}
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
