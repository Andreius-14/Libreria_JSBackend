const { Router } = require('express')
const axios = require('axios')
const router = Router()

router.get('/', (req, res) => {
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

router.get('/post', async (req, res) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(response)
  res.render('posts', {
    posts: response.data
  }) // 🌱
})
module.exports = router
