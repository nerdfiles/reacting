/**
 * @filepath ./src/interfaces/WPTreeviewNavigation/index.js
 * @fileoverview trying out a possible web component for a treeview-navigation.
 * @name WPTreeviewNavigation
 * @license wtfpl, version 2
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @example
 * @example
 * @example
 * @description a singular <ul class="treeview-navigation"> implementation in reactjs.
 * @summary a `ul["treeview-navigation"]`.
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-navigation.html
 */
// import { Random } from 'random-js'
// import Logger from '../infrastructure/utils/Logger'

/**
 * @constant
 * @default
 */
// const MT19937 = require('mt19937')

/**
 * @constant
 * @default
 */
// const RANDMAX = new Random(MT19937.Seed())

/**
 * @constant
 * @default
 */
const EMPTY_TREE = () => {
  return (
    <div className='m-view--empty-tree__default__'>
      <ul className='m-view-empty-tree-list__default__'>
        <span
          className='m-view--icon-empty__default__'
          title='no data provided'
        ></span>
      </ul>
    </div>
  )
}

/**
 * @name WPTreeviewNavigation
 * @kind function
 * @param {} props
 */
const WPTreeviewNavigation = (props) => {
  /**
   * @constant
   * @default
   */
  const DATA_TREE = props?.dataTree

  /**
   * @name DataTreeElement
   * @kind function
   * @param {} props
   */
  const DataTreeElement = (props) => {
    /**
     * @constant
     * @default
     */
    const DATA = props?.data

    return (
      <ul
        ariaLevel='1'
        className='treeview-navigation'
      >
        {
          DATA 
          ? DATA.map((ref) => {
              return ref
            })
          : EMPTY_TREE
        }
      </ul>
    )
  }

  return (
    <DataTreeElement data={DATA_TREE} />
  )
}

export default WPTreeviewNavigation

// EOF
