import React,{useState, useContext} from 'react'
import { GlobalState } from '../../globalState'

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