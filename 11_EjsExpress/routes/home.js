const { Router } = require('express')
const router = Router()

router.all('/', (req, res) => {
  const isActive = true
  const users = [
    {
      id: 1,
      name: 'ryan',
      lastname: 'perez'
    },
    {
      id: 2,
      name: 'ran',
      lastname: 'pez'
    }
  ]
  res.render('index', {
    title: 'Index Page',
    isActive,
    users

  }) // 🌱
})

router.get('/about', (req, res) => {
  res.render('about') // 🌱
})

router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router
