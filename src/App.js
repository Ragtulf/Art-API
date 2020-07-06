import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { List } from './pages/list'
import { ObjectDetails } from './pages/object'

export const App = () => {
  return (
    <BrowserRouter>
      <h1>Art API</h1>
      <Switch>

        <Route path="/" exact>
          <List />
        </Route>

        <Route path="/object/:objectId">
          <ObjectDetails />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
