import axios from 'axios';
import React ,{useState}from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const[user,setUser]=useState({
    name:'',email:'',password:''
  })

   const onChangeInput=e=>{
    const {name, value}=e.target;
    setUser({...user,[name]:value})
   } 

   const registerSubmit=async e =>{
    e.preventDefault()
    try {
        await axios.post('user/login', {...user})
        localStorage.setItem('firstlogin', true)

        window.location.href= '/'
    } catch (err) {
      alert(err.response.data.msg)
      
    }
   }


  return (
    <div className='login-page'>
        <form onSubmit={registerSubmit}>
          <input type='email' name='email' required
          placeholder='Email' value={user.email} onChange={onChangeInput}/>

          <input type='password' name='password' required autoComplete='on'
          placeholder='Password' value={user.password} onChange={onChangeInput}/>

          <div className='row'>
            <button type='submit'>Login</button>
            <Link to='/register'>Register</Link>
          </div>
        </form>
    </div>
  )
}

export default Register