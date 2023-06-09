const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
//router.post('/handle-form-actions', coursesController.handelFormActions);
router.get('/:id/edit', coursesController.edit);

router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.destroy);
router.delete('/:id/force', coursesController.forceDestroy);
router.patch('/:id/restore', coursesController.restore);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);

module.exports = router;