const router = require('express').Router()
const controller = require('../controllers/StudentsController')

router.get('/', controller.getStudents)
router.post('/', controller.createStudent)
router.delete('/', controller.deleteStudent)

module.exports = router
