import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("logedin")
    navigate('/Login')

  }
  return (
   <> <div>you have succesfully loged in</div>
    <button onClick={handleLogout}>logout</button>
    </>
  
  )
}

export default Home