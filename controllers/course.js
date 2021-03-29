const Course = require('../models').Course
const Lecturer = require('../models').Lecturer
const Student = require('../models').Student

module.exports = {
    list(req,res){
        return Course.findAll({
            include: [{model: Lecturer, as: 'lecturer'},
                    {model: Student, as: 'students'}],
            order: [['createdAt', 'DESC'],
                    [{model: Student, as:'students'}, 'createdAt', 'DESC']]
        })
        .then((courses) => res.status(200).send(courses))
        .catch((error) => res.status(400).send(error))
    },

    getById(req, res){
        return Course.findByPk(req.params.id, {
            include: [{model: Course, as: 'course'}],
        })
        .then((course) => {
            if (!course) {
                return res.status(404).send({message: 'Course not found'})
            }
            return res.status(200).send(course)
        })
        .catch((error) => res.status(400).send(error))
    },

    create(req, res){
        return Course.create(req.body)
        .then((course) => res.status(201).send(course))
        .catch((error) => res.status(400).send(error))
    },
    
    update(req, res){
        return Course.findByPk(req.params.id, {
            include: [{model: Course, as: 'course'}],
        })
        .then((course) => {
            if (!course) {
                return res.status(404).send({message: 'Course not found'})
            }
            return course.update(req.body)
            .then (() => {res.status(202).send(course)})
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    },

    delete(req, res) {
        return Course.findByPk(req.params.id)
        .then((course) => {
            if (!course) {
                return res.status(404).send({message: ' Course not found'})
            }
            course.destroy()
            .then(()=> res.status(204).send())
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    },
}