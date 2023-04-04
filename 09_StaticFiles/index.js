const express = require('express')
const app = express()

const morgan = require('morgan')
const path = require('path')

// 🌱Evita enviar archivo por archivo ala web , Creamos una carpeta publica
// 🌱Se recomienda posicionarlo al Ultimo
// 🌱Podemos tener mas de una carpeta

app.use(morgan('dev'))

// [rutas]
app.get('/profile', (req, res) => {
  res.send('profile page')
})

app.get('/about', (req, res) => {
  res.send('about page')
})

// [Middlewares]
app.use((req, res, next) => {
  if (req.query.login === 'fazt@faztweb.com') {
    next()
  } else {
    res.send('No autorizado')
  }
})

// [Rutas]
app.get('/dashboard', (req, res) => {
  res.send('Dashboard page')
})

// 🌱 StaticFiles [Error Ruta]
// app.use('./public', express.static('./public'))
// app.use('./uploads', express.static('./uploads'))

// 🌱 StaticFiles [Recomendado]
app.use('./public', express.static(path.join(__dirname, './public')))
app.use('./uploads', express.static(path.join(__dirname, './uploads')))

// [puerto]
app.listen(3000)
console.log(`Server on port ${3000}`)

/*
  🌱 StaticFiles: Permite dar permisos para crear la Carpeta publica
  🌱 StaticFiles: La carpeta no es obligatorio que tenga ese nombre
  🟥 StaticFiles: Considera que esta en la base ruta inicial del proyecto - requiere path
*/
