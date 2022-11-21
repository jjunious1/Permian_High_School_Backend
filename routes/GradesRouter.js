const router = require('express').Router()
const controller = require('../controllers/GradesController')

router.get('/', controller.getGrade)
router.post('/', controller.createGrade)

module.exports = router
