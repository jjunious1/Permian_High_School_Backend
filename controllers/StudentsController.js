const { Student } = require('../models')

const getStudents = async (req, res) => {
  try {
    const Students = await Student.findAll({})
    res.send(Students)
  } catch (error) {
    throw error
  }
}
const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body)
    res.send(newStudent)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getStudents,
  createStudent
}
