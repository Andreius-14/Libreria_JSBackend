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

/* [Ruta del Error] */
app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina')
})

app.listen(3000)
console.log(`server on port ${3000}`)

/* [Por lo general usaremos POST el usuario al ingresar a una url] */
