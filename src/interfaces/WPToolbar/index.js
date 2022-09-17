/**
 * @filepath ./src/interfaces/WPToolbar/index.js
 * @fileoverview trying out a possible web component for a tree-grid-email-inbox.
 * @name WPToolbar
 * @license wtfpl, version 2
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @description a singular <ul class="wp-toolbar"> implementation in
 * reactjs. because it's a list of actions.
 * @summary a `ul["wp-toolbar"]`.
 */
// import { random } from 'random-js'
// import logger from '../infrastructure/utils/logger'

/**
 * @constant
 * @default
 */
// const mt19937 = require('mt19937')

/**
 * @constant
 * @default
 */
// const randmax = new random(mt19937.seed())

/**
 * @constant
 * @default
 */
const EmptyTree = () => {
  return (
    <li
      className='O-view--empty-tree__default__'
    >

      <ul className='m-view-empty-tree-list__default__'>
        <span
          className='m-view--icon-empty__default__'
          title='no data provided'
        >no data provided</span>
      </ul>
    </li>
  )
}

/**
 * @name WPToolbar
 * @kind function
 * @param {} props
 */
const WPToolbar = (props) => {
  /**
   * @constant
   * @default
   */
  const DATA_TREE = props?.dataTree

  /**
   * @name Toolbar
   * @kind function
   * @param {} props
   */
  const Toolbar = (props) => {
    /**
     * @constant
     * @default
     */
    const DATA = props?.data

    return (
      <ul
        ariaLevel='1'
        className='O-view--wp-toolbar__default__'
      >
        {
          DATA 
          ? DATA.map((ref, k) => {
              return (
                <li key={k}>
                  {ref?.ID}
                </li>
              )
            })
          : <EmptyTree />
        }
      </ul>
    )
  }

  return (
    <>
      <Toolbar
        data={DATA_TREE}
      />
    </>
  )
}

export default WPToolbar

// EOF
