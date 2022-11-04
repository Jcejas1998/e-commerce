import React,{useState, useContext} from 'react'
import { GlobalState } from '../../globalState'
import Menu from './icon/menu.svg'
import Close from './icon/menu.svg'
import Cart from './icon/cart.svg'

function Header() {
    const value = useContext(GlobalState)
  return (
    <div>
        <header>
        <div className='menu'>
                  <img src={Menu} alt="" width="30"/>  
            </div>
        </header>
    </div>
  )
}

export default Header