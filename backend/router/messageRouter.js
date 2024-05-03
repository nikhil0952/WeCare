import express from "express"
import { messageSend } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", messageSend);

export default router;