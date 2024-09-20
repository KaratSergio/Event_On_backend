import express from "express";
import {
  registerParticipant,
  getParticipantsByEvent,
} from "../controllers/participantController.js";
import { validatorBody } from "../middlewares/validatorBody.js";
import { participantSchema } from "../schemas/participantSchemas.js";

const router = express.Router();

router.post("/register", validatorBody(participantSchema), registerParticipant);
router.get("/:eventId", getParticipantsByEvent);

export default router;
