import React,{useState, useContext} from 'react'
import { GlobalState } from '../../globalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg.svg'
import Cart from './icon/cart.svg.svg'

function Header() {
    const value = useContext(GlobalState)
  return (
    <div>
        <header>

        </header>
    </div>
  )
}

export default Header