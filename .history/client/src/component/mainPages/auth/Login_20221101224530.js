import React ,{useState}from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const[user,setUser]=useState({
    email:'',password:''
  })



  return (
    <div className='login-page'>
        <form>
          <input type='email' name='email' required
          placeholder='Email' value={user.email}/>

          <input type='password' name='password' required
          placeholder='Password' value={user.password}/>

          <div className='row'>
            <button type='submit'>Login</button>
            <Link></Link>
          </div>
        </form>
    </div>
  )
}

export default Login