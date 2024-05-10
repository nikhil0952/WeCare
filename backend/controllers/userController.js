import express from "express";
import { User } from "../models/userSchema.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { messageSend } from "./messageController.js";
import cloudinary from "cloudinary"



export const registerPatient = async (req, res, next) => {

    try {
        console.log("enetered!!!!");
        // Desturcturing
        const { firstName, lastName, email, phone, dob, gender, nationality, role, password } = req.body;

        // check all values are present
        if (!firstName || !lastName || !email || !phone || !dob || !gender || !nationality || !role || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing Entered values!"
            });
        }

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: "User exists before!"
            })
        }

        // hash the password 
        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            email,
            phone,
            dob,
            gender,
            nationality,
            role: "Patient",
            password: hashPassword
        });

        // storing data in a variable userData
        const userData = await User.findOne({ email });

        // Creating jwt token and insert into cookie
        const jwttoken = jwt.sign(
            {
                id: userData._id, email

            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES
            },

        )

        // adding jwt to cookie with res
        return res.status(200).cookie("patientJWT", jwttoken, {
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
        }).json({
            success: true,
            message: "Data entered successfully!"
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }

}

export const login = async (req, res, next) => {
    try {

        const { email, password, confirmPassword, role } = req.body;

        if (!email || !password || !confirmPassword || !role) {
            return res.status(400).json({
                status: false,
                message: "Enter values !!"
            })
        }

        // checking password and confirm password
        if (password !== confirmPassword) {
            return res.status(400).json({
                status: false,
                message: "Please Enter Correct Password!!"
            })
        }

        // finding user in database
        const userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({
                status: false,
                message: "Invalid Email Or Password!!"
            })
        }

        // checking password 
        const checkPassword = await bcrypt.compare(password, userData.password);
        if (!checkPassword) {
            return res.status(400).json({
                status: false,
                message: "Invalid Password!!"
            })
        }

        // checking role
        if (role !== userData.role) {
            return res.status(400).json({
                status: false,
                message: "Invalid role!!"
            })
        }

        // creating jwt and adding to cookie
        const jwtToken = jwt.sign(
            { id: userData._id, email },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES
            }
        )

        const cookieName = role == "Admin" ? "adminJWT" : "patientJWT";

        return res.status(200).cookie(cookieName, jwtToken, {
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
        }).json({
            success: true,
            message: "Successfully logined!!",
            cookieName
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

export const registerAdmin = async (req, res, next) => {

    try {
        console.log("enetered!!!!");
        // Desturcturing
        const { firstName, lastName, email, phone, dob, gender, nationality, role, password } = req.body;

        // check all values are present
        if (!firstName || !lastName || !email || !phone || !dob || !gender || !nationality || !role || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing Entered values!"
            });
        }

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: "Email exists before!"
            })
        }

        // hash the password 
        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            email,
            phone,
            dob,
            gender,
            nationality,
            role: "Admin",
            password: hashPassword
        });

        // fetching data and storing in a variable adminData
        const adminData = await User.findOne({ email });

        // Creating jwt token and insert into cookie
        const jwttoken = jwt.sign(
            {
                id: adminData._id
            },
            process.env.JWT_SECRET_KEY,
            {

                expiresIn: process.env.JWT_EXPIRES
            }
        )

        // adding jwt to cookie with res
        return res.status(200).cookie("adminJWT", jwttoken, {
            expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
        }).json({
            success: true,
            message: "Data entered successfully!"
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }

}

export const registerDoctor = async (req, res, next) => {

    try {
        console.log("enetered!!!!");
        console.log(req.files);
        if (!req.files) {
            return res.status(500).json({
                success: false,
                message: "Doctor avtar file not recieved!"
            })
        }
        
        const { docAvatar } = req.files;
        const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
        if (!allowedFormats.includes(docAvatar.mimetype)) {
            return res.status(500).json({
                success: false,
                message: "File Format Not Supported!"
            })
        };
        console.log(docAvatar);

        // Desturcturing
        const { firstName, lastName, email, phone, dob, gender, nationality, password, doctorDepartment } = req.body;

        // check all values are present
        if (!firstName || !lastName || !email || !phone || !dob || !gender || !nationality || !password || !doctorDepartment || !docAvatar) {
            return res.status(400).json({
                success: false,
                message: "Missing Entered values!"
            });
        }

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: "Email exists before!"
            })
        }

        const cloudinaryResponse = await cloudinary.uploader.upload(
            docAvatar.tempFilePath
        );
        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.error(
                "Cloudinary Error:",
                cloudinaryResponse.error || "Unknown Cloudinary error"
            );
            return res.status(400).json({
                success: false,
                message: "Failed To Upload Doctor Avatar To Cloudinary"
            })
            
        }

        // hash the password 
        const hashPassword = await bcrypt.hash(password, 10);

        const doctor = await User.create({
            firstName,
            lastName,
            email,
            phone,
            dob,
            gender,
            nationality,
            role: "Doctor",
            password: hashPassword,
            doctorDepartment,
            docAvatar: {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url,
              },
        });

        console.log(doctor);


        // adding jwt to cookie with res
        return res.status(200).json({
            success: true,
            message: "Data entered successfully!"
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error occurs !!!",
            error
        })
    }

}

// function to get all doctors details from database
export const getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await User.find({ role: "Doctor" });
        return res.status(200).json({
            success: true,
            doctors,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

// returning user details
export const getUserDetails = async (req, res, next) => {
    const userData = req.user;
    return res.status(200).json({
        success: true,
        userData
    })
}

// returning admin details
export const getAdminDetails = async (req, res, next) => {
    const userData = req.user;
    return res.status(200).json({
        success: true,
        userData
    })
}

// logout for admin
export const logoutAdmin = async (req, res, next) => {
    try {
        return res.status(201).cookie(
            "adminJWT", "", {
            httpOnly: true,
            expires: new Date(Date.now())
        }
        ).json({
            success: true,
            message: "Successfully logout from admin"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

// logout for patient
export const logoutPatient = async (req, res, next) => {
    try {

        return res.status(201).cookie(
            "patientJWT", "", {
            httpOnly: true,
            expires: new Date(Date.now())
        }
        ).json({
            success: true,
            message: "Successfully logout from Patient!!!"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}