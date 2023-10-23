const Student = require('../models/student.model')

async function getAllStudents(req, res) {

    try {
        const students = await Student.findAll()
        return res.status(200).json(students)
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
async function getOneStudent(req, res) {

    try {
        const student = await Student.findByPk(req.params.id)
        return res.status(500).json(student)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function createStudent(req, res) {

    try {
        const student = await Student.create(req.body)
        res.status(200).send('student created')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateStudent(req, res) {

    try {
        const [studentExists, student] = await Student.update(req.body, {
            returning: true,
            where: {

                id: req.params.id

            }


        })
        if (studentExists !== 0) {

            return res.status(200).json({ message: 'student updated', student: student })

        } else {

            return res.status(404).send('student not found')
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }

}

async function deleteStudent(req,res) {

try {
    const student = await Student.destroy({

where : {


    id : req.params.id
}

    })

    if (student) {
        return res.status(200).json('student has been deleted')
    } else {
        return res.status(404).send('student not found')
    }
} catch (error) {
    return res.status(500).send(error.message)
}

}
module.exports = {getAllStudents, getOneStudent, createStudent, updateStudent, deleteStudent}