const { Course, Student, Grade } = require('../models')
const { Op } = require('sequelize')

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
    const name = req.body.name
    const showStudent = await Course.findOne({
      where: {
        [Op.and]: [{ name: name }, { studentId: req.body.studentId }]
      },
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
