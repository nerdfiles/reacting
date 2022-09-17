/**
 * @filepath ./src/interfaces/WPToast/index.js
 * @fileoverview trying out a possible web component for a toast.
 * @name WPToast
 * @license wtfpl, version 2
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @description a singular <ul class="wp-toast"> implementation in
 * reactjs. because it's a list of actions.
 * @summary a `ul["wp-toast"]`.
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
    <dl
      className='O-view--empty-toast__default__'
    >
      <dt className='m-view-empty-toast__default__'>empty</dt>
      <dd
        className='m-view--icon-empty__default__'
        title='no data provided'
      >no data provided</dd>
    </dl>
  )
}

/**
 * @name WPToast
 * @kind function
 * @param {} props
 */
const WPToast = (props) => {
  /**
   * @constant
   * @default
   */
  const DATA_TREE = props?.dataTree

  /**
   * @name Toast
   * @kind function
   * @param {} props
   */
  const Toast = (props) => {
    /**
     * @constant
     * @default
     */
    const DATA = props?.data

    return (
      <aside
        ariaLevel='1'
        className='O-view--wp-toast__default__'
      >
        {
          DATA 
          ? DATA.map((ref, k) => {
              return (
                <p key={k}>
                  {ref?.ID}
                </p>
              )
            })
          : <EmptyTree />
        }
      </aside>
    )
  }

  return (
    <>
      <Toast
        data={DATA_TREE}
      />
    </>
  )
}

export default WPToast

// EOF
