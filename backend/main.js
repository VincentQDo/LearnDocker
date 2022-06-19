const express = require('express')
const app = express()
const port = 3000

let jsonObj = { counter: 0 }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.route('/counter')
  .get((req, res) => {
    res.send(jsonObj)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})