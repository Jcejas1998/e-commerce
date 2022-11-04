import React ,{useState}from 'react'

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
          </div>
        </form>
    </div>
  )
}

export default Login