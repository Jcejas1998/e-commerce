import React,{useState,useContext} from 'react'
import {GlobalState} from '../../GlobalState'


function Header() {
    const value = useContext()
  return (
    <div>Header component</div>
  )
}

export default Header