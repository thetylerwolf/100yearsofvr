import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Year from './Year'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import createHistory from 'history/createBrowserHistory'

const history = createHistory()
history.listen((location, action) => {
  window.gtag('config', 'UA-79915122-1', {
    'page_title' : location.pathname,
    'page_path': location.pathname
  })
})

class Routes extends Component {
  render() {
    return (
      <Router history={ history }>
        <Switch location={ this.props.location }>
          <Route path="/" exact component={ App }/>
          <Route path="/years/:year" exact component={ Year }/>
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
