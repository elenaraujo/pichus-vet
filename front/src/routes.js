import React from 'react'
import App from './App'
import RegisterView from './components/views/RegisterView'

import { Switch, Route } from 'react-router-dom'

function Routes() {
  return (
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/register' component={RegisterView} />
      <Route component={() => <div>Page 404!</div>} />
    </Switch>
  )
}

export default Routes
