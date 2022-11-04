function Header() {
    const value = useContext(GlobalState)
  return (
    <div>
        <header>
            <div className='menu'>
                  <img src={Menu} alt="" width="30"/>  
            </div>
            <div className='logo'>
                <h1>
                    <Link to='/'>DevAT SHOP</Link>
                </h1>
            </div>
            <ul>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/login'>Login/register</Link></li>

                <li>
                    <img src={Close} alt='' width='30'/>
                </li>
            </ul>

            <div className='cart-icon'>
                <span>0</span>
                <Link>
                    <img src={Cart} alt='' width='30'/>
                </Link>
            </div>
        </header>
    </div>
  )
}

export default Header