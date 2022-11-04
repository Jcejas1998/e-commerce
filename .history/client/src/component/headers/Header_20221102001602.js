import React,{useState,useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Cart from './icon/cart.svg'
import Close from './icon/close.svg'
import { Link } from 'react-router-dom'

function Header() {
    const state = useContext(GlobalState)
    console.log(state);
  return (
    <header>
        <div className='menu'>
                <img src={Menu} alt='' width='30'/>
        </div>

        <div className='logo'>
            <h1>
                <Link to='/'>devat shop </Link>
            </h1>
        </div>

        <ul>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/login'>Login or register</Link></li>

            <li>
                <img src={Cart} alt='' width='30'/>
            </li>
        </ul>

        <div className='cart-icon'>
            <span>0</span>
            <Link to='/cart'>
                <img src={Close} alt='' width='30' className='menu'/>
            </Link>
        </div>
    </header>

  )
}

export default Header