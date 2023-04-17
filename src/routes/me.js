const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController')

router.get('/trash/courses', meController.trashCourse)
router.get('/', meController.index)

module.exports = router;
