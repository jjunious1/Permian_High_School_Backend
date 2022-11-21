const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//routes
app.use('/', (req, res) => {
  res.send('this is working')
})

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
