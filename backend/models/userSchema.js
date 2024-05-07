import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "Minimum 3 characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Minimum 3 characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Enter email correctly!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "minimum 10 digits!"],
        maxLength: [10, "maximum 10 digits!"]
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    nationality: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient", "Doctor"]
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Minimum 8 characters!"]
    },
    doctorDepartment: {
        type: String,
    },
    docAvatar: {
        public_id: String,
        url: String,
    },

})

export const User = mongoose.model("User", userSchema);