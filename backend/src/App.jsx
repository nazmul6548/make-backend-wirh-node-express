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
  const handleClick = e => {
e.preventDefault();
const form = e.target;
const name = form.name.value;
const email = form.email.value;
const user = {name,email}
console.log(user);
  }

  return (
    <div className='text-center'>
   
      
    <h1>nazmul islam jewel</h1>
    <h3>data length : {user.length}</h3>
  <div>
    <form onSubmit={handleClick}>
      <input type="name" name="name" placeholder='name' />
      <br />
      <input type="email" name="email" placeholder='email' />
      <button>click for submit</button>
    </form>
  </div>
    
    </div>
  )
}

export default App
