const router = require('express').Router()
const controller = require('../controllers/CourseCountroller')

router.get('/', controller.getCourse)
router.post('/', controller.createCourse)
router.get('/:id', controller.getStudentCourse)

module.exports = router
