const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.get('/saludar', (req, res) => {
    let who = req.query.quien
    res.send(`Hola ${who}`)
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
