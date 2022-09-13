/**
 * @name App
 */
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Store from './novel-component/reducers'
import NovelComponent from './novel-component'
import './novel-component/connect'

const store = createStore(Store)

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={NovelComponent} />
      </Route>
    </Router>
  </Provider>
)

export default App

// EOF
