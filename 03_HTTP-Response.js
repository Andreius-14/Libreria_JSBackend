const express = require('express')

const app = express()

/* [Al acceder a la ruta - Envia ] */
app.get('/', (req, res) => {
  res.send('Hello world')
})

// Objeto Imagen
app.get('/miarchivo', (req, res) => {
  res.sendFile('./images.png', {
    root: __dirname
  })
})
// Objeto Json
app.get('/user', (req, res) => {
  res.json({ name: 'Fazt' })
})

/* [Por lo general para verificar si el servidor no se ha caido] */
app.get('/isAlive ', (req, res) => {
  res.sendStatus(204)
})

app.listen(3000)

console.log(`Server on port ${3000}`)

/*
  🌱 Muestra archivo predeterminado al ir a una ruta - Ejemplo Imagen
 */
