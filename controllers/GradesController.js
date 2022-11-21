const { Grade } = require('../models')

const getGrade = async (req, res) => {
  try {
    const grades = await Grade.findAll({})
    res.send(grades)
  } catch (error) {
    throw error
  }
}
const createGrade = async (req, res) => {
  try {
    const newGrade = await Grade.create(req.body)
    res.send(newGrade)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getGrade,
  createGrade
}
