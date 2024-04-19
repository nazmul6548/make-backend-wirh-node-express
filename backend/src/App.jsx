import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users,serUser] = useState([]);

  useEffect(()=>{
fetch("http://localhost:5000/users")
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
fetch("http://localhost:5000/users",{
  method: 'POST',
  headers:{
'content-type': 'application/json'
  },
  body:JSON.stringify(user)
})
.then(res => res.json())
.then(data => {
  
  const newUsers = [...users,data]
  serUser(newUsers)
  form.reset()
})
  }

  return (
    <div className='text-center'>
   
      
    <h1>nazmul islam jewel</h1>
    <h3>data length : {users.length}</h3>
  <div>
    <form onSubmit={handleClick}>
      <input type="name" name="name" placeholder='name' />
      <br />
      <input type="email" name="email" placeholder='email' />
      <button>click for submit</button>
    </form>
    {users.map(data => (
  <div key={data.id}>
    {data.name}: {data.email}
  </div>
))}
  </div>
    
    </div>
  )
}

export default App
