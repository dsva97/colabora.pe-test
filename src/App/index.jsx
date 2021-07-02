import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './Layout'
import { Products, Create } from '../views/index.jsx'

const ToProducts = () => <Redirect to="/products" />

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ToProducts} />
          <Route path="/products" component={Products} />
          <Route path="/create" component={Create} />
          <Route component={ToProducts} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
