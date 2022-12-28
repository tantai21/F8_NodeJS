const express = require('express');
const router = express.Router();
const coursesControllers = require('../app/controllers/CoursesControllers')
router.get('/create', coursesControllers.create)
router.post('/store', coursesControllers.store)
router.get('/:slug', coursesControllers.show)
module.exports = router;