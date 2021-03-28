const Classroom = require('../models').Classroom
const Student = require('../models').Student


module.exports = {
    list(req,res){
        return Classroom.findAll({
            include: [{model: Student,as: 'students'}],
            order: [
                ['createdAt', 'DESC'],
                [{ model: Student, as: 'students' }, 'createdAt', 'DESC'],
            ]
        })
        .then((classrooms) => res.status(200).send(classrooms))
        .catch((error) => res.status(400).send(error))
    },
    

    getById (req, res) {
        return Classroom.findByPk(req.params.id, {
            include: [{model: Student, as: 'students'}]
        })
        .then((classroom) => {
            if (!classroom) {
                return res.status(404).send({message: 'Classroom not found'})
                
            }
            return res.status(200).send(classroom)

        })
        .catch((error) => res.status(400).send(error))
    },

    create(req, res) {
        return Classroom.create(req.body)
        .then((classroom) => res.status(201).send(classroom))
        .catch((error) => res.status(400).send(error))
    },

    update(req, res) {
        return Classroom.findByPk(req.params.id, {
            include : [{model: Student, as: 'students'}]
        })
        .then ((classroom) => {
            if (!classroom){
                return res.status(404).send({message: "Classroom not found"})    
            }

            return classroom.update(req.body)
            .then (() => {res.status(202).send(classroom)})
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    },
    

    delete(req, res) {
        return Classroom.findByPk(req.params.id, {
            include : [{model: Student, as: 'students'}]
        })
        .then((classroom) => {
            if (!classroom) {
                return res.status(404).send({message: "Classroom not found"})
                
            }
            classroom.destroy()
            .then(()=> res.status(204).send())
            .catch((error) => res.status(400).send(error))
        })
        .catch((error) => res.status(400).send(error))
    },

    
    
    



}