import express from 'express'
const app = express()
const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({
    api: '/v1'
  })
})

app.use('/api', routes)

export default app
