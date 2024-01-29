import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import helmet from 'helmet'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(helmet())
app.use(bodyParser.json({ limit: '50mb' }))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`)
})