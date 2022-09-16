/**
 * @filepath ./src/interface.parts/Button.js
 * @fileoverview trying out a possible web component.
 * @name Button
 * @license wtfpl, version 2
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @description a singular `❮button❯` implementation in reactjs.
 * @summary a <button>.
 */
// import exec from 'exec'
// import Logger from '../infrastructure/utils/Logger'
// import { Random } from 'random-js'
// const MT19937 = require('mt19937')
// const RANDMAX = new Random(MT19937.Seed())

/**
 * @constant
 * @default
 */
const GLUE = ''

/**
 * @name Icon
 * @description a singular icon for a button.
 * @param {Object.props} props
 * @returns {React.FC}
 */
const Icon = (props) => {
  /**
   * @constant
   * @default
   */
  const SYMBOL = props && props.symbol 

  /**
   * @constant
   * @default
   */
  const NAMED_SYMBOL = ['#icon-', SYMBOL].join(GLUE)

  /**
   * @constant
   * @default
   */
  const FOCUSABLE = 'false'

  /**
   * @constant
   * @default
   */
  const HIDDEN = 'true'

  /**
   * @constant
   * @default
   */
  const CLASSNAME = 'm-view--icon-label__default__'

  return (
    <svg
      ariaHidden={HIDDEN}
      className={CLASSNAME}
      focusable={FOCUSABLE}
    >
      <use xlinkHref={NAMED_SYMBOL}></use>
    </svg>
  )
}

/**
 * @name Button
 * @description Button.
 * @param {Object.props}
 * @returns {React.FC}
 */
const Button = (props) => {
  /**
   * @constant
   * @default
   */
  const ID = [
    'element_'
  ].join(GLUE)

  /**
   * @constant
   * @default
   */
  const NAME = [
    'name_'
  ].join(GLUE)

  /**
   * @constant
   * @default
   */
  const TABINDEX = '0'

  /**
   * @constant
   * @default
   */
  const DISABLED = false

  // const RANDBOTTOM = 1
  // const RANDTOP = 100
  // const value = RANDMAX.integer(RANDBOTTOM, RANDTOP)
  // const wordList = exec('diceware -n 16 > .words && cat .words | sed -e \'s/[A-Z]/\\ &/g\'')
  // Logger({ label: '', msg: [wordList] })

  // frontend console output
  // Logger({ label: 'value', msg: [value] })

  const hasIcon = props?.concept && props.concept.icon

  return (
    <button
      disabled={DISABLED}
      id={ID}
      name={NAME}
      onClick={(e) => {
        props.act()
        e.preventDefault()
      }}
      tabIndex={TABINDEX}
    >
      <span
        className='m-view--text-label__default__'
      >{props.textLabel}</span>

      {hasIcon 
        ? <Icon symbol={hasIcon} />
        : <></>
      }
    </button>
  )
}

export default Button

// EOF
