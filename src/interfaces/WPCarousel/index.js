/**
 * @name WPCarousel
 */
import WPArticle from './WPArticle'
import WPRolodex from './WPRolodex'

const WPCarousel = () => {

  return (
    <section className='O-view--carousel__default__'>

      <header className='o-view--title-line__default__'>
        <h2 className='m-view--carousel-title'>wpcarousel</h2>
      </header>

      <main className='o-view--carousel__default__'>
        <ul className='m-view--carousel-list__default__'>
          <li className='m-view--listing__default__'>
            <WPArticle>
              <h3 className='a-view--title__default__'>title</h3>
              <figure className='a-view-detail__default__'>
                <img
                  className='a-view-image__default__'
                  alt='title'
                  src='./assets/content-images/0.png'
                />
                <figcaption className='a-view-caption__default__'>
                </figcaption>
              </figure>
            </WPArticle>
          </li>
        </ul>
      </main>

      <WPRolodex />

      {
        /**
         * @example WPRolodex
         * <nav>
         *   <ul>
         *     <li class='bullet'>article</li>
         *   </ul>
         * </nav>
         */
      }

      <footer className='o-view--carousel__default__'>
        <ul className='m-view--carousel-list__default__'>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='related'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='used'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='watched'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='submitted'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='navigation'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='fixtures'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='profiles'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='ignores'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='forwards'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
          <li className='m-view--listing__default__'>
            <h3 className='m-view-title__default__'>&lt;rel='queue'&gt;</h3>
            <ul className='m-view--list__default__'>
              <li className='m-view--listing__default__'>...</li>
            </ul>
          </li>
        </ul>
      </footer>

    </section>
  )
}

export default WPCarousel



















































































































// EOF
