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
router.post('/student/add_course', studentController.addCourse)

// Lecturer
const lecturerController = require('../controllers').lecturer

router.get('/lecturer', lecturerController.list)
router.get('/lecturer/:id', lecturerController.getById)
router.post('/lecturer', lecturerController.create)
router.put('/lecturer/:id', lecturerController.update)
router.delete('/lecturer/:id', lecturerController.delete)


// Course
const courseController = require('../controllers').course


router.get('/course', courseController.list)
router.get('/course/:id', courseController.getById)
router.post('/course', courseController.create)
router.put('/course/:id', courseController.update)
router.delete('/course/:id', courseController.delete)

module.exports = router;
