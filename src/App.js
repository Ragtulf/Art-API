import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import { ObjectList } from './pages/objectList'
import { PersonList } from './pages/personList'
import { ObjectDetails } from './pages/objectDetails'
import { PersonDetails } from './pages/personDetails'


export const App = () => {
  return (
    <BrowserRouter>
      <NavLink to="/">
        <h1>Art API</h1>
      </NavLink>
      <Switch>

        <Route path="/" exact>
          <ObjectList />
        </Route>

        <Route path="/object/:objectId">
          <ObjectDetails />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
