const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/about', (req, res) => {
  res.send('Acerca de')
})

app.get('/weather', (req, res) => {
  res.send('The current weather is Nice')
})

app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina')
})
