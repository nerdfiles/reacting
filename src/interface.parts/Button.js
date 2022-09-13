/**
 * @filepath ./src/interface.parts/Button.js
 * @fileoverview .
 * @name Button
 * @license wtfpl, version 2
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @example
 * @example
 * @example
 * @description
 * @param {} _ .
 * @returns {} .
 */
// import exec from 'exec'
// import Logger from '../infrastructure/utils/Logger'
// import { Random } from 'random-js'
// const MT19937 = require('mt19937')
// const RANDMAX = new Random(MT19937.Seed())

const Icon = (props) => {
	const SYMBOL = props && props.symbol 
	const NAMED_SYMBOL = `#icon-${SYMBOL}`
	const FOCUSABLE = 'false'
	const HIDDEN = 'true'

	return (
		<svg
			aria-hidden={HIDDEN}
			focusable={FOCUSABLE}
		>
			<use xlinkHref={NAMED_SYMBOL}></use>
		</svg>
	)
}

/**
 * @name Button
 * @description
 * @param {Object.props}
 */
const Button = (props) => {
	const hasIcon = props?.concept && props.concept.icon
  const glue = ''
  // const RANDBOTTOM = 1
  // const RANDTOP = 100
  // const value = RANDMAX.integer(RANDBOTTOM, RANDTOP)
  // const wordList = exec('diceware -n 16 > .words && cat .words | sed -e \'s/[A-Z]/\\ &/g\'')
  // Logger({ label: '', msg: [wordList] })

  // frontend console output
  // Logger({ label: 'value', msg: [value] })

  const _id = [
    'element_'
  ].join(glue)

  return (
    <button
      id={_id}
      onClick={(e) => {
        props.act()
        e.preventDefault()
      }}
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
