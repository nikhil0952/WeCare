import express from "express";
import { getAllDoctors,getAdminDetails,logoutPatient ,registerPatient ,logoutAdmin , login, registerAdmin, registerDoctor,getUserDetails} from "../controllers/userController.js";
import { patientAuthentication, adminAuthentication  } from "../middleware/Authentication.js";
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
// getting admin data
router.get("/admin/details",adminAuthentication ,getAdminDetails);

// getting all doctors
router.get("/doctors",patientAuthentication,getAllDoctors);

// logout 
router.get("/patient/logout",patientAuthentication,logoutPatient);

// logout 
router.get("/admin/logout",adminAuthentication,logoutAdmin );





export default router;