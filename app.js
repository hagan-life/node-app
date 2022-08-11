const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('<center><h1>Hello World!</h1></center>')
})

app.listen(port, () => {
  console.log(`node-app listening on port ${port}...`)
})