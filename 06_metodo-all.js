const express = require('express')
const app = express()

app.all('/info', (req, res) => {
  res.send('server Info')
})

app.listen(3000)
console.log(`Server on port ${3000}`)

// 🌱 all: Envia su respuesta independiente del metodo post get etc
// 🌱 all: podemos usar thunder ,Independiente el metodo. el resultado sera -> 'server Info'
