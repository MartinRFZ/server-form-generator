import express from 'express'
import { dbConnection } from './src/db.js'
import formRoutes from './src/routes/routes.js'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(express.json())

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.use(formRoutes)

dbConnection()
app.listen(3000, () => {
  console.log('Server on port 3000')
})
