import { Router } from 'express'
import { studentModel } from '../models/studentModel.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const result = await studentModel.find()
        res.status(200).send({ status: 'success', data: result })
    } catch (error) {
        res.status(400).send({ status: 'error', error: 'Error al obtener los estudiantes' })
    }
})

router.post('/', async (req, res) => {
    const newStudent = req.body
    console.log(newStudent);
    try {
        const result = await studentModel.create(newStudent)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send({ status: 'error', error: 'Error al crear el estudiante' })
    }
});

router.put('/:id', async (req, res) => {
    const idStudent = req.params.id;
    const newStudent = req.body;
    
    try {
        const result = await studentModel.updateOne({ _id: idStudent }, newStudent);
        if (result.matchedCount === 0) {
            return res.status(404).send({ status: 'error', error: 'Estudiante no encontrado' });
        }
        res.status(200).send({ status: 'success', data: result });
    } catch (error) {
        console.log("Error de Mongoose:", error);
        res.status(400).send({ status: 'error', error: error.message });
    }
});

export default router;