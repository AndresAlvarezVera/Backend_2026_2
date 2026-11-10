import { Router } from 'express'
import { courseModel } from '../models/courseModel.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const result = await courseModel.find()
        res.status(200).send({ status: 'success', data: result })
    } catch (error) {
        res.status(400).send({ status: 'error', error: 'Error al obtener los cursos' })
    }
})

router.get('/:id', async (req, res) => {
    const idCourse = req.params.id;
    try {
        const result = await courseModel.findOne({ _id: idCourse }).populate('Student.student');
        if (!result) {
            return res.status(404).send({ status: 'error', error: 'Curso no encontrado' });
        }
        res.status(200).send({ status: 'success', data: result });
    } catch (error) {
        res.status(400).send({ status: 'error', error: 'Error al obtener el curso' });
    }
})

router.post('/', async (req, res) => {
    const newCourse = req.body
    console.log(newCourse);
    try {
        const result = await courseModel.create(newCourse)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send({ status: 'error', error: 'Error al crear el curso' })
    }
});

router.put('/:id', async (req, res) => {
    const idCourse = req.params.id;
    const newCourse = req.body;

    try {
        const result = await courseModel.updateOne({ _id: idCourse }, newCourse);
        if (result.matchedCount === 0) {
            return res.status(404).send({ status: 'error', error: 'Curso no encontrado' });
        }
        res.status(200).send({ status: 'success', data: result });
    } catch (error) {
        console.log("Error de Mongoose:", error);
        res.status(400).send({ status: 'error', error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    const idCourse = req.params.id;
    try {
        const result = await courseModel.deleteOne({ _id: idCourse });
        if (result.deletedCount === 0) {
            return res.status(404).send({ status: 'error', error: 'Curso no encontrado' });
        }
        res.status(200).send({ status: 'success', data: result });
    } catch (error) {
        console.log("Error de Mongoose:", error);
        res.status(400).send({ status: 'error', error: error.message });
    }
})

export default router;