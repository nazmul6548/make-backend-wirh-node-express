import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user,serUser] = useState([]);

  useEffect(()=>{
fetch("http://localhost:5000/user")
.then(res => res.json())
.then(data => serUser(data))
  },[])

  return (
    <>
   
      
    <h1>nazmul islam jewel</h1>
    <h3>data length : {user.length}</h3>
  
    
    </>
  )
}

export default App
