const router = require('express').Router()
const controller = require('../controllers/StudentsController')

router.get('/', controller.getStudents)
router.post('/', controller.createStudent)

module.exports = router
