import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'

function Pages() {
  return (
    <Switch>
        <Route path='/' component={Products}/>
    </Switch>
  )
}

export default Pages