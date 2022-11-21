const { Course, Student, Grade } = require('../models')

const getCourse = async (req, res) => {
  try {
    const course = await Course.findAll({
      include: [
        {
          model: Grade,
          as: 'result'
        },
        {
          model: Student,
          as: 'students'
        }
      ]
    })
    res.send(course)
  } catch (error) {
    throw error
  }
}
const createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body)
    res.send(newCourse)
  } catch (error) {
    throw error
  }
}

const getStudentCourse = async (req, res) => {
  try {
    const { studentId } = req.body.studentId
    const showStudent = await Course.findByPk(req.params.id, {
      where: { studentId: studentId },
      include: [
        {
          model: Grade,
          as: 'result'
        },
        {
          model: Student,
          as: 'students'
        }
      ]
    })
    res.send(showStudent)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCourse,
  createCourse,
  getStudentCourse
}
