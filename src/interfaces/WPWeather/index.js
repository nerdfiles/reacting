/**
 * @filepath ./src/interfaces/WPWeather/index.js
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @name WPWeather
 * @description get some weather data if you want it.
 */
const Data = (props) => {
  /**
   * @constant
   * @default
   */
  const DATA = props?.dataList

  return (
    <ul className='m-view--list__default__'>
      {DATA.length ?
        DATA.map(() => {
          return (
            <li class='m-view--listing__default__'>
              <div class='m-view--bucket__default__'>
                <span class='m-view--label__default__'>weather data label/icon</span>
                <span class='m-view--datum__default__'>weather data/visualization</span>
              </div>
            </li>
          )
        }) : <></>
      }
    </ul>
  )
}

const WPWeather = (props) => {
  /**
   * @constant
   * @default
   */
  const CLASSNAME = 'm-view--wpweather__default__'

  return (
    <section
      className={CLASSNAME}
      id={props?.ID}
      name={props?.name}
      title={props?.title}
    >
      <h2 className='m-view--copyline__default__'>weather</h2>
      <Data
        dataList={props?.dataList}
      />
    </section>
  )
}

export default WPWeather

// EOF
