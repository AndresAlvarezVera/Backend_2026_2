import mongoose from "mongoose";

const studentCollection = "Student";

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, required: true, unique: true},
});

export const studentModel = mongoose.model(studentCollection, studentSchema);

