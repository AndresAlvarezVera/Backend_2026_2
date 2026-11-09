import mongoose from "mongoose";

const studentCollection = "students";

const studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, required: true, unique: true},
});

export const studentModel = mongoose.model(studentCollection, studentsSchema);

