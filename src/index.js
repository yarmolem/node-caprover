import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Hello World!' })
})

app.listen(3001, () => {
  console.log('Example app listening on port 3000!')
})
