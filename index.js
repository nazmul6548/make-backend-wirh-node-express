const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const user = [
    {
        id:1,name:"jewel",email:"nazmul@gmail.com"
    }
]

app.get('/', (req, res) => {
    res.send('Hello World! hello jewel;')
  })


  app.get("/user",(req, res) => {
    res.send(user)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })