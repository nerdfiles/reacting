/**
 * @name WPBreadcrumbs
 * @version 0.0.0-novel.0
 * @description WPBreadcrumbs.
 * @kind function.React.FC
 * @param {Object} props 
 */
const WPBreadcrumbs = (props) => {
  /**
   * @constant
   * @default
   */

  return (
    <nav
      title=''
      itemScope=''
      itemType='https://schema.org/WPBreadcrumbs'
    >
      <ul>
        <li>
          top item
          <ul>
            <li>
              nested item
              <ul>
                <li>
                  last item
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

// EOF
