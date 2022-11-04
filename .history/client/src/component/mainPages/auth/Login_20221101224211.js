import React ,{useState}from 'react'

function Login() {
  const[user,setUser]=useState({
    email:'',password:''
  })



  return (
    <div>Login component</div>
  )
}

export default Login