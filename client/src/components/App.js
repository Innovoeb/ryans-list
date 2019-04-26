import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router-dom";
import Landing from './landing'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Landing}/>

        </Router>
      </Provider>
    )
  }
}

export default App
