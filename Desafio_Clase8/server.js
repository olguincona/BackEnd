const { Router } = require('express')
const express = require('express')
const {Router} = express

const app = express()
const router = Router()

router.get('/api/productos', (req, res) => {
    res.send('productos')
})
router.get('/api/productos/:id', (req, res) => {
    res.send('productos.id')
})

router.post('/api/productos', (req, res) => {})

router.put('/api/productos/:id', (req, res) => {})

router.delete('/api/productos/:id', (req, res) => {})

app.use('/api', router)

app.listen(8080)