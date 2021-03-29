const Lecturer = require('../models').Lecturer
const Course = require('../models').Course

// Lecturer can add course, course cannot add lecturer

module.exports = {
    list(req,res){
        return Lecturer.findAll({
            include: [{model: Course, as: "course"}],
            order: [['createdAt', 'DESC']]
        })
        .then((lecturers) => res.status(200).send(lecturers))
        .catch((error) => res.status(400).send(error))
    },

    getById(req, res){
        return Lecturer.findByPk(req.params.id, {
            include: [{model: Course, as: "course"}],
        })
        .then((lecturer) =>
         {
            if (!lecturer) {
                return res.status(404).send({message: 'Lecturer not found'})
           
            }
            return res.status(200).send(lecturer)
        })
        .catch((error) => res.status(400).send(error))
    },

    create(req, res){
        return Lecturer.create(req.body, {
            include: [{model: Course, as: "course"}]
        })
        .then((lecturer) => res.status(201).send(lecturer))
        .catch((error) => res.status(400).send(error))
    },


    update(req, res){
        return Lecturer.findByPk(req.params.id, {
            include: [{model: Course, as: "course"}],
        })
        .then((lecturer) => {
            if (!lecturer) {
                return res.status(404).send({message: 'Lecturer not found'})
            }
            return lecturer.update(req.body)
            .then (() => {res.status(202).send(lecturer)})
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    },

    delete(req, res) {
        return Lecturer.findByPk(req.params.id)
        .then((lecturer) => {
            if (!lecturer) {
                return res.status(404).send({message: ' Lecturer not found'})
            }
            lecturer.destroy()
            .then(()=> res.status(204).send())
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    }
    

}