import React,{useState, useContext} from 'react'
import { GlobalState } from '../../globalState'
import Menu from './icon/menu.svg'
import Close from './icon/menu.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'

function Header() {
    const value = useContext(GlobalState)
  return (
    <div>
        <header>
        <div className='menu'>
                  <img src={Menu} alt="" width="30"/>  
            </div>
            {/* <div className='logo'>
                <h1>
                    <Link to='/'>DevAT SHOP</Link>
                </h1>
            </div>  */}
            <ul>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/login'>Login/register</Link></li>

                <li>
                    <img src={Close} alt='' width='30'/>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header