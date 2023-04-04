/* eslint-disable no-multi-spaces */
const express = require('express')
const app = express()

app.get('/hello/:username', (req, res) => {
  console.log(req.query)        // { user: 'Fazt', age: '10' }
  console.log(req.query.user)   // Fazt
  console.log(req.query.age)    // 10
  res.send(`Hello ${req.params.username.toUpperCase()}`)

  // http://localhost:3000/hello/Andres?user=Fazt&age=10
  // { user: 'Fazt', age: '10' }

  // http://localhost:3000/hello/Andres?x=20
  // { x: '20' }

  // http://localhost:3000/hello/Andres?palabra=word&age=10
  // { palabra: 'word', age: '10' }
})

app.get('/search', (req, res) => {
  if (req.query.q === 'javascript books') {
    res.send('lista de libros de javascript')
  } else {
    res.send('pagina normal')
  }
  console.log(req.query)

  // http://localhost:3000/search?q=javascript%20books

  // http://localhost:3000/search?user=mateo&user=juan
  // { user: [ 'mateo', 'juan' ] }

  // http://localhost:3000/search?user=mateo&user=juan&user=judas
  // { user: [ 'mateo', 'juan', 'judas' ] }
})

app.listen(3000)
console.log(`Server on port ${3000}`)

// 🌿 Querys: informacion dentro de la Url
// 🌿 Querys: Acceso a las propiedadades de un OBJETO

// 🌿 Querys: Si en el url, se envia varios valores a un campo se crea un Array
// la url codifica el space con %20
