import React,{useState, useEffect} from 'react'

function UserAPI() {
    const [isLogged, setIsLogged]= useState(false)
    const [isAdmin, setIsAdmin]= useState(false)

    useEffect(() => {
        if(token){
            const getUser = async()=>{
                try {
                    
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
        }
      getUser()
    }, [token])
    

  return (
    <div>UserAPI</div>
  )
}

export default UserAPI