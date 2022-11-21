const { Course } = require('../models')

const getCourse = async (req, res) => {
  try {
    const Course = await Course.findAll({})
    res.send(Course)
  } catch (error) {
    throw error
  }
}
const createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body)
    res.send(Course)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCourse,
  createCourse
}
