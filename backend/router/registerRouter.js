import express from "express";
import { registerPatient , login, registerAdmin, registerDoctor} from "../controllers/userController.js";
const router = express.Router();

// patient register
router.post("/patient/register",registerPatient);

// admin register
router.post("/admin/register",registerAdmin);

// doctor register
router.post("/doctor/register",registerDoctor);

// login
router.post("/login", login);





export default router;