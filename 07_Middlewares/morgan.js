const express = require('express')
const app = express()

const morgan = require('morgan')

// 💀 Middlewares - Muestra Informacion
app.use(morgan('dev'))
// 🌱 Morgan tiene diferentes aparte de dev .revisar documentacion

// 💀 rutas
app.get('/profile', (req, res) => {
  res.send('profile page')
})

app.get('/about', (req, res) => {
  res.send('about page')
})

// 💀 Middlewares - Todo pasa por aqui
app.use((req, res, next) => {
  if (req.query.login === 'fazt@faztweb.com') {
    next()
  } else {
    res.send('No autorizado')
  }
})

// 💀 Rutas
app.get('/dashboard', (req, res) => {
  res.send('Dashboard page')
})

// 💀 puerto
app.listen(3000)
console.log(`Server on port ${3000}`)

// 🌱 Middlewares:
