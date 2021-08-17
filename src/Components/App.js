import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login'

import './index.css'

const App = () => {
    return (
        <div>
     
            <Router>
    <Switch>
  <Route exact path='/'>
    <Home />
  </Route>
  <Route path='/Login'>
    <Login />
  </Route>

</Switch>
  </Router>
        </div>
    )
}

export default App
