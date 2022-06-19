// App imports
const express = require('express')
const mongoose = require('mongoose')
const Counter = require('./models/counter')
const cors = require('cors')

// App set up
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000
const dbName = 'CounterDb'
const uri = `mongodb+srv://vinceqdo:AsY8RnSgxT3kWl4N@cluster0.lbpghzh.mongodb.net/${dbName}?retryWrites=true&w=majority`

// Set up mongodb connection using mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to db')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })
  .catch((err) => { console.log(err) })

// Default route
app.get('/', (req, res) => {
  res.redirect('/counter')
})

// counter routes
app.route('/counter')
  .get((req, res) => {
    Counter.find().sort({insert_datetime: 'desc'})
    .then(result => {{
      res.send(result)
    }})
    .catch(err => {
      console.error(err)
    })
  })
  .post((req, res) => {
    const counter = new Counter({
      current_num: req.body.counter,
      insert_datetime: Date.now()
    })
    counter.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.error(err)
    })
  })