const express = require('express')
const app = express()

// 💀 Se pueden considerar Middlewares - Son 7 formatos
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))// Formularios

// 💀 Middlewares - Muestra Informacion
app.use((req, res, next) => {
  console.log('➡️  Paso por aqui ➡️')
  console.log(`[Route: ${req.url} - Metodo:${req.method}]`)
  next()
})

// rutas
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

// Rutas
app.get('/dashboard', (req, res) => {
  res.send('Dashboard page')
})

// puerto
app.listen(3000)
console.log(`Server on port ${3000}`)

// 🌱 Middlewares: La puerta antes de llegar al backend
// 🌱 Middlewares: Mientras pasa por ella el navegador hace esperar next()
// 🌱 Middlewares: Sirve va verificar Logins
// 🌱 Middlewares: El orden Importa - No es necesario que vayan junto

// 🌿 Middlewares: Todas las rutas pasan por el - Si su codigo esta debajo del codigo 🌿Middlewares
// 🌿 PODEMOS USAR MIDDLEWARES QUE YA HAN CREADO OTROS -> Morgan
