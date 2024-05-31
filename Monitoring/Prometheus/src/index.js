const express = require('express')
const client = require('prom-client')

const app = express()

const PORT = 8000

app.get('/', (req, res) => {
    res.send('hello to the mock server')
})

app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`)
})