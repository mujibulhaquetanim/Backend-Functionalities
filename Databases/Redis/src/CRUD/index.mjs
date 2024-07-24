import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from CRUD server')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})