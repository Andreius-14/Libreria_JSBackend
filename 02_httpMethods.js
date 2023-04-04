const express = require('express')

const app = express()

app.get('/products', (req, res) => {
  // Valida Datos
  // query a database
  // process Data
  res.send('Lista de Productos')
})

app.post('/products', (req, res) => {
  res.send('Creando Productos')
})

app.put('/products', (req, res) => {
  res.send('Actualizando Productos')
})

app.delete('/products', (req, res) => {
  res.send('Eliminando un Producto')
})

app.patch('/products', (req, res) => {
  res.send('Actualizando una parte del Producto')
})

app.listen(3000)

console.log(`Server on port ${3000}`)

// 🌱 Puede ir a la misma ruta e llegar a un diferente resultado por el metodo que usa
