/**
 * @name App
 */
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Cache from './novel-component/web-cache'
import NovelComponent from './novel-component'
import './novel-component/connect'

const __interface__ = createStore(Cache)

const App = () => (
  <Provider store={__interface__}>
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={NovelComponent} />
      </Route>
    </Router>
  </Provider>
)

export default App

// EOF
