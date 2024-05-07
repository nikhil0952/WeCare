import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";

export const addAppointment = async (req, res, next) => {
    try {
        // destructuring 
        const { firstName, lastName, email, phone, nationality, dob,appointmentDate, gender, department, doctorFirstName, doctorLastName, address } = req.body;
        
        // check all values present or not
        if (!firstName || !lastName || !email || !phone || !nationality || !dob|| !appointmentDate || !gender || !department || !doctorFirstName || !doctorLastName || !address) {
            return res.status(400).json({
                success: false,
                message: "Please enter all values!"
            })
        }
        

        const isConflict = await User.find({
            firstName: doctorFirstName,
            lastName: doctorLastName,
            role: "Doctor",
            doctorDepartment: department,
        });
        if (isConflict.length === 0) {
            return res.status(500).json({
                success: false,
                message: "No doctor found"
            })
        }

        if (isConflict.length > 1) {
            return res.status(500).json({
                success: false,
                message: "same name multiple doctors!"
            })
        }
        // isConflict is an array so we have to traverse it like array
        const doctorId = isConflict[0]._id;

        // getting patientid after passing from  middleware
        const patientId = req.user._id;

        // adding data to database
        await Appointment.create({
            firstName, lastName, email, phone, nationality, dob, gender,appointmentDate, department,
            doctor:{
                firstName: doctorFirstName,
                lastName: doctorLastName
            },
            address,doctorId,patientId
        })
        return res.status(200).json({
            success:true,
            message: "Appointment added successfully!"
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }

}