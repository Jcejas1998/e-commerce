import React,{useState,useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Cart from './icon/cart.svg'
import Close from './icon/close.svg'
import { Link } from 'react-router-dom'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged, setIsLogged] = state.userAPI.isLogged
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin


    const adminRouter = ()=>{
        return(
            <>
                <li><Link to='/create_product'>Create Product</Link></li>
                <li><Link to='/category'>Category</Link></li>
            </>
        )
    }

    const loggedRouter = ()=>{
        return(
            <>
                <li><Link to='/history'>history</Link></li>
                <li><Link to='/'>logout</Link></li>
            </>
        )
    }

    return (
    <header>
        <div className='menu'>
                <img src={Menu} alt='' width='30'/>
        </div>

        <div className='logo'>
            <h1>
                <Link to='/'>{isAdmin ? 'admin':'Devatshop'} </Link>
            </h1>
        </div>

        <ul>
            <li><Link to='/'>{isAdmin ? 'products':'shop'}</Link></li>

            {isAdmin && adminRouter}
            {
                isLogged?loggedRouter:<li><Link to='/login'>Login or register</Link></li>
            }

            

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