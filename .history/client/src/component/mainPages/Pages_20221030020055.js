import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/NotFound/NotFound'


function Pages() {
  return (
    <Switch>
        <Route path='/' exact component={Products}/>
        <Route path='/detail:id' exact component={Products}/>
        <Route path='/login'exact  component={Login}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/cart' exact component={Cart}/>


        <Route path='*' component={NotFound}/>
    </Switch>
  )
}

export default Pages