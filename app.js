const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/saludo', (request, response) => {
    response.json({ mensaje: 'Hola desde mi app ALB' })
})

app.listen(PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${PORT}`)
})