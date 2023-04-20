const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController')
router.post('/forceDestroy-actions', meController.handelFormActionsTrash)
router.post('/handle-form-actions', meController.handelFormActions)
router.get('/trash/courses', meController.trashCourse)
router.get('/', meController.index)

module.exports = router;
