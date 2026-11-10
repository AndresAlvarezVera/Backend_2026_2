import mongoose from 'mongoose'

const courseCollection = "course";

const courseSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    professor: {type: String, required: true},
    Student: {
        type: [{ student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' } }],
        default: []
    }
})

export const courseModel = mongoose.model(courseCollection, courseSchema);