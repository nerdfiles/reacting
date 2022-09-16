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
              href='https://bit.ly/3S8KhND'
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
              rev='non-functional'
              title='cypress and api storytelling test (typically associated with "non-functional" testing)'
              href='https://example.com'
            >
              the word you're looking for is "behavior," test-driven developer. typically considered <em>non-functional testing</em>:<br />
              incremental (or <em><abbr title='application programming interface'>api</abbr>-centric</em>), domain-focused <em>behavior</em> testing (wip)
            </a>
          </li>
          <li>
            <a
              rev='functional'
              title='unit, regression, and integration test (typically associated with "functional" testing)'
              href='https://example.com'
            >
              <em>functional testing</em>:<br />
              monolithic (or <em>data-centric</em>), feature-focused <em>unit</em> testing (wip)
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
          <li>
            <a
              rev='repo'
              href='https://github.com/nerdfiles/reacting'
            >
              repo
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default WPFooter

// EOF
