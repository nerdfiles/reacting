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
        12:49:44
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
  someNumber: React.PropTypes.number
}

NovelComponent.defaultProps = {
  initialCount: 0
}

export default NovelComponent

// EOF
