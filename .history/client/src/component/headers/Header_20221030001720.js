import React,{useState,useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Cart from './icon/cart.svg'
import Close from './icon/close.svg'


function Header() {
    const value = useContext(GlobalState)
  return (
    <header>
        <div className='menu'>
                <img src={Menu}
        </div>
    </header>
  )
}

export default Header