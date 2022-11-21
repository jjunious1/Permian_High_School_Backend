const router = require('express').Router()
const controller = require('../controllers/CourseCountroller')

router.get('/', controller.getCourse)
router.post('/', controller.createCourse)

module.exports = router
