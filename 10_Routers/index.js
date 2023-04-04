const express = require('express')

const morgan = require('morgan')
const path = require('path')

const app = express()

const HomeRoutes = require('./routes/home') // 🌱
const UserRoutes = require('./routes/users') // 🌱

// Settings
app.set('case sensitive routing', true)
app.set('appName', 'Express Course')
app.set('port', 4000)

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

app.use(HomeRoutes) // 🌱
app.use(UserRoutes) // 🌱

// Routes
app.use('./public', express.static(path.join(__dirname, './public')))
app.use('./uploads', express.static(path.join(__dirname, './uploads')))

// [puerto]
app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)

/*
  🌱 Usamos Settings
  🌱 Permite fragmentar las rutas y exportarlas
  🌱 Proposito dividir una aplicacion en multiples partes
*/
