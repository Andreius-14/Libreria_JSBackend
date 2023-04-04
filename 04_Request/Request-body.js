const express = require('express')
const app = express()

// Se pueden considerar Middlewares - Son 7 formatos
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))// Formularios

// Paso segundo por aqui
app.post('/user', (req, res) => {
  // Imprime el Archivo Enviado
  console.log(req.body)
  res.send('Nuevo Usuario Creado')
})

app.listen(3000)
console.log(`Server on port ${3000}`)

/*
  🌱 El envio siempre tiene un HEader
  🌱 El thunder nos permite enviar post con diferentes formatos de documentos
  🌱 req es la informacion del cliente
*/
