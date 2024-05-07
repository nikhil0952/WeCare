import express from "express"
import { addAppointment } from "../controllers/appointmentController.js";
import { patientAuthentication } from "../middleware/Authentication.js";
const router = express.Router();

// adding appointment
router.post("/appointment",patientAuthentication,addAppointment);

export default router;