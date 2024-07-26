import express from 'express'
import router from './routes/redisRoutes.mjs'
const app = express()
app.use(express.json())

app.use('/redis', router)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})