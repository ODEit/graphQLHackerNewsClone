import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'
import Login from './Login'

class App extends Component{
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
          <Route exact path="/login" component={Login} />
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App