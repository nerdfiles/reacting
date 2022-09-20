/**
 * @name WPBreadcrumbs
 * @version 0.0.0-novel.0
 * @description WPBreadcrumbs.
 * @kind function.React.FC
 * @param {Object} props - .
 */
const WPBreadcrumbs = (props) => {
  return (
    <nav
      title=''
      itemScope=''
      itemType='https://schema.org/WPBreadcrumbs'
    >
      <ul className='m-view--crumblist__first__'>
        <li className='m-view--crumb__first__'>
          <span
            className='a-view-crumb__default'
            title=''
          >
            top item
          </span>
          <ul className='m-view--crumblist__second__'>
            <li className='m-view--crumb__second__'>
              <span
                className='a-view-crumb__default'
                title=''
              >
                nested item
              </span>
              <ul className='m-view--crumblist__last__'>
                <li className='m-view--crumb__last__'>
                  <span
                    className='a-view-crumb__default'
                    title=''
                  >
                    last nested item
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <aside>
        <h2>extending and enhancing the breadcrumb concept</h2>
        <p>
          other modes of the sitemap, like "see all second-tier navigation items"
          as an example of "use related".
        </p>
        <p>
          yes, a breadcrumb trail should have some additional navigational
          features, like maybe even a hoverable tooltip per item of a given
          level that reveals all other items on that level, rather than only
          link to a mode of the sitemap revealing that level of navigation.
        </p>
      </aside>
    </nav>
  )
}

export default WPBreadcrumbs

// EOF
