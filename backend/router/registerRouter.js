import express from "express";
import { getAllDoctors,logoutPatient ,registerPatient , login, registerAdmin, registerDoctor,getUserDetails} from "../controllers/userController.js";
import { patientAuthentication } from "../middleware/Authentication.js";
const router = express.Router();

// patient register
router.post("/patient/register",registerPatient);

// admin register
router.post("/admin/register",registerAdmin);

// doctor register
router.post("/doctor/register",registerDoctor);

// login
router.post("/login", login);

// getting user data
router.get("/patient/details",patientAuthentication,getUserDetails);

// getting all doctors
router.get("/doctors",patientAuthentication,getAllDoctors);

// logout 
router.get("/patient/logout",patientAuthentication,logoutPatient);





export default router;