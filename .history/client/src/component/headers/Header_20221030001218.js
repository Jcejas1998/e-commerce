import React,{useState,useContext} from 'react'
import {GlobalState} from '../../GlobalState'


function Header() {
    const value = useContext(GlobalState)
  return (
    <div>Header component</div>
  )
}

export default Header