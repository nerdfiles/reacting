/**
 * @name WPFooter
 * @description footer
 * @param {Object.props}
 */
const WPFooter = (props) => {
  return (
    <footer
      id='lounge'
      className='m-view--lounge__default__'
      itemScope
      itemType='https://schema.org/WPFooter'
    >
      <h2 className='m-view--copyline__default__'>footer</h2>
      <nav
        itemScope
        itemType='https://schema.org/SiteNavigationElement'
      >
        <ul>
          <li>
            <a
              href='https://arrested.surge.sh/docs/index.html'
              title='cyclomatic complexity, mereological density'
            >
            docs
            </a>
          </li>
          <li>
            <a
              href='https://arrested.surge.sh/sassdoc/index.html'
              title='cyclomatic complexity, mereological density'
            >
            sassdoc
            </a>
          </li>
          <li>
            <a
              href='https://arrested.surge.sh/css-report/App.scss/index.html'
              title='traceability, adjustability, incrementation'
            >
            WebApp specializability
            </a>
          </li>
          <li>
            <a
              href='https://arrested.surge.sh/css-report/index.scss/index.html'
              title='traceability, adjustability, incrementation'
            >
            index specializability
            </a>
          </li>
          <li>
            <a
              href='https://arrested.surge.sh/report'
              title='ossificability, fragmentability'
            >
            concretizability
            </a>
          </li>
          <li>
            <a
              rev='schema'
              href='https://validator.schema.org/#url=https://arrested.surge.sh'
            >
              validate schema
            </a>
          </li>
          <li>
            <a
              rev='a11y'
              href='https://wave.webaim.org/report#/https://arrested.surge.sh'
            >
              audit #a11y
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default WPFooter

// EOF
