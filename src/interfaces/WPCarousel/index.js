/**
 * @name WPCarousel
 */
import WPArticle from './WPArticle'
import WPRolodex from './WPRolodex'

const WPCarousel = () => {

  return (
    <section>

      <header>
        <h2>wpcarousel</h2>
      </header>

      <main>
        <ul>
          <li>
            <WPArticle>article</WPArticle>
          </li>
        </ul>
      </main>

      <WPRolodex />

      <nav>
        <ul>
          <li class='bullet'>article</li>
        </ul>
      </nav>

      <footer>
        <ul>
          <li>
            <h3>&lt;rel='related'&gt;</h3>
            <ul>
              <li>...</li>
            </ul>
          </li>
          <li>
            <h3>&lt;rel='used'&gt;</h3>
            <ul>
              <li>...</li>
            </ul>
          </li>
        </ul>
      </footer>

    </section>
  )
}

export default WPCarousel



















































































































// EOF
