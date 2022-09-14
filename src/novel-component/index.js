/**
 * @name NovelComponent
 */
import React from 'react'

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
  ID: React.PropTypes.number
}

const task = {}

task['https://schema.org/InteractionCounter'] = {
  interactionCount: 0
}

NovelComponent.defaultProps = task

export default NovelComponent

// EOF
