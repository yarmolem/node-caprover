import 'dotenv/config'
import express from 'express'

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Hello World!' })
})

app.listen(PORT, () => {
  console.log('Example app listening on ' + 'http://localhost:' + PORT + '!')
})
