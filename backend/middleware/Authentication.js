import { User } from "../models/userSchema.js";
import jwt from "jsonwebtoken";


export const adminAuthentication = async (req, res, next) => {


    try {
        // fetch jwt from req cookies
        const jwtToken = req.cookies.adminJWT;
        const verifyJWT = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const adminData = await User.findOne({_id : verifyJWT._id});
        if(!adminData){
            return res.status(500).json({
                success: false,
                message: "Unable to fetch data from cookie!!"
            })
        }
        if(adminData.role !== "Admin"){
            return res.status(500).json({
                success: false,
                message: "role donot match!!"
            })
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }


}

export const patientAuthentication = async (req, res, next) => {


    try {
        // fetch jwt from req cookies
        const jwtToken = req.cookies.patientJWT;
        const verifyJWT = await jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        
        const email = verifyJWT.email;
        

        const patientData = await User.findOne({email});
        
        
        if(!patientData){
            return res.status(500).json({
                success: false,
                message: "Unable to fetch data from cookie!!"
            })
        }
        if(patientData.role !== "Patient"){
            return res.status(500).json({
                success: false,
                message: "role donot match!!"
            })
        }
        req.user = patientData;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }


}