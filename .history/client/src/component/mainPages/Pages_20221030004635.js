import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/NotFound/NotFound'


function Pages() {
  return (
    <Switch>
        <Route path='/' component={Products}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/cart' component={Cart}/>
    </Switch>
  )
}

export default Pages