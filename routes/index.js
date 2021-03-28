var express = require('express');
var router = express.Router();

// Classroom
const classroomController = require('../controllers').classroom

router.get('/classroom', classroomController.list)
router.get('/classroom/:id', classroomController.getById)
router.post('/classroom', classroomController.create)
router.put('/classroom/:id', classroomController.update)
router.delete('/classroom/:id', classroomController.delete)

// Student
const studentController = require('../controllers').student

router.get('/student', studentController.list)
router.get('/student/:id', studentController.getById)
router.post('/student', studentController.create)
router.put('/student/:id', studentController.update)
router.delete('/student/:id', studentController.delete)



module.exports = router;
