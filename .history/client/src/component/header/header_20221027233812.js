import React,{useState, useContext} from 'react'
import { GlobalState } from '../../globalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg.svg'
import Cart from './icon/cart.svg.svg'
import {Link} from 'react-router-dom'


function Header() {
    const value = useContext(GlobalState)
  return (
    <div>
        <header>
            <div className='menu'>
                  <img src={Menu} alt="" width="30"/>  
            </div>
            <div className='logo'>
                <h1></h1>
            </div>
        </header>
    </div>
  )
}

export default Header