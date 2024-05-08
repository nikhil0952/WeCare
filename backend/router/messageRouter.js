import express from "express"
import { messageSend,getAllMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", messageSend);
router.get("/get/messages", getAllMessages);

export default router;