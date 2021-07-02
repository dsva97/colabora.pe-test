import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Layout } from './Layout'
import { Products, Create } from '../views/index.jsx'

const ToProducts = () => <Redirect to="/products" />

export const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
