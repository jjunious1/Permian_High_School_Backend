const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const StudentsRouter = require('./routes/StudentsRouter')
const GradeRouter = require('./routes/GradesRouter')
const CourseRouter = require('./routes/CourseRouter')

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//routes
app.use('/students', StudentsRouter)
app.use('/courses', CourseRouter)
app.use('/grades', GradeRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
