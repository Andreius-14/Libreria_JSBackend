// 🌿 Paramentros Dinamicos o  Rutas Dinamicas

const express = require('express')
const app = express()

// 💀 Dinamicos-01
app.get('/hello/:username', (req, res) => {
  res.send(`Hello  -> ${req.params.username.toUpperCase()}`)
})

// 💀 Dinamicos-02
app.get('/add/:x/:y', (req, res) => {
  const { x, y } = req.params
  res.send(`result: ${parseInt(x) + parseInt(y)}`)

  // const result = parseInt(req.params.x) + parseInt(req.params.y)
  // console.log(req.params.x)
  // console.log(req.params.y)
})

// 💀 Dinamicos-03
app.get('/name/:nombre/age/:age', (req, res) => {
  console.log(req.params)
  res.send(`El usuario ${req.params.name} tiene ${req.params.age} Años`)
})

// 💀 Dinamicos-04
app.get('/users/:username/photo', (req, res) => {
  if (req.params.username === 'fazt') {
    res.sendFile('./images.png', {
      root: __dirname
    })
  } else {
    res.send(`El usuario no tiene acceso - ${req.params.username} - ${typeof req.params.username}`)
  }
})

// 💀 Puerto
app.listen(3000)
console.log(`Server on port ${3000}`)

// 🌿 :USER sera el req.params.user
// Todo lo que se envie por url es texto
