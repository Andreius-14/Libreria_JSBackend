const express = require('express')
const app = express()

// 🌱 Rutas
app.get('/', (req, res) => {
  res.send('Hello world')
})

// [Ruta Error]
app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina')
})

app.listen(3000)
console.log(`server on port ${3000}`)

// 🌱 Variables Globales - Acceso desde cualquier archivo
// 🌱 Posicion - Esto se fija el la parte de Arriba
// 🌱 Posicion - Antes de Middlewares

// [Creacion]
app.set('appName', 'Express Course')
app.set('port', 3000)

// [Acceso]
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)

// [Añade Ruta sensitiva]
app.set('case sensitive routing', true)
