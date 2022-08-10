const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('<h1>Hello from Node App!</h1>')
})

app.listen(port, () => {
  console.log(`node-app listening on port ${port}...`)
})