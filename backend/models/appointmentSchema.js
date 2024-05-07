import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "Minimum length should be 3"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Minimum 3 characters!"]
    },
    email: {
        type: String,
        required: true,
       
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "minimum 10 digits!"],
        maxLength: [10, "maximum 10 digits!"]
    },
    nationality: {
        type: String,
        required: true
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
    appointmentDate: {
        type: String,
        required: true
    },
    doctorDepartment: {
        type: String,
    },
    doctor: {
        firstName: {
            type: String,
            required: [true, "Doctor Name Is Required!"],
        },
        lastName: {
            type: String,
            required: [true, "Doctor Name Is Required!"],
        },
    },
    address: {
        type: String,
        required: [true, "Address Is Required!"],
    },
    doctorId: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Doctor Id Is Invalid!"],
    },
    patientId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Patient Id Is Required!"],
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
    },

})

export  const Appointment = mongoose.model("Appointment",appointmentSchema);