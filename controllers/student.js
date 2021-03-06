const Student = require('../models').Student
const Classroom = require('../models').Classroom
const Course = require('../models').Course

module.exports = {
    list(req,res) {
        return Student.findAll({
            include: [{model: Classroom, as :'classroom'}],
            include: [{model: Course, as: 'courses'}],
            order: [
                ['createdAt', 'DESC'],
                [{model: Course, as: 'courses'}, 'createdAt', 'DESC']
            ]
        })
        .then((students) => res.status(200).send(students))
        .catch((error) => res.status(400).send(error))
    },

    getById(req, res) {
        return Student.findByPk(req.params.id, {
            include: [{model: Classroom, as :'classroom'}],
            include: [{model: Course, as: 'courses'}],
            order: [
                [{model: Course, as: 'courses'}, 'createdAt', 'DESC']
            ]
        })
        .then((student) => {
            if (!student) {
                return res.status(404).send({message: 'Student not found'})
            }
            return res.status(200).send(student)
        })
        .catch((error) => res.status(400).send(error))
    },

    create(req, res) {
        return Student.create(req.body)
        .then((student) => res.status(201).send(student))
        .catch((error) => res.status(400).send(error))
    },
    
    update(req, res) {
        return Student.findByPk(req.params.id, {
            include: [{model: Classroom, as :'classroom'}],
            include: [{model: Course, as: 'courses'}],
            order: [
                [{model: Course, as: 'courses'}, 'createdAt', 'DESC']
            ]
        })
        .then((student) => {
            if (!student) {
                return res.status(404).send({message: 'Student not found'})
            }
            return student.update(req.body)
            .then (() => {res.status(202).send(student)})
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    },

    delete(req, res) {
        return Student.findByPk(req.params.id)
        .then((student) => {
            if (!student) {
                return res.status(404).send({message: ' Student not found'})
            }
            student.destroy()
            .then(()=> res.status(204).send())
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    },

    addCourse(req, res) {
        return Student
        .findByPk(req.body.student_id, {
            include: [{model: Classroom, as: 'classroom'},
            {model: Course, as: 'courses'}],
        })
        .then((student) => {
            if (!student) {
                return res.status(404).send({
                    message: 'Student Not Found',
                });
            }
            Course.findByPk(req.body.course_id).then((course) => {
                if (!course) {
                    return res.status(404).send({
                    message: 'Course Not Found',
                    });
                }
                student.addCourse(course);
                return res.status(200).send(student);
            })
        })
        .catch((error) => res.status(400).send(error));
    },


}