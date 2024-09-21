import mongoose from "mongoose";
import Participant from "../models/ParticipantModel.js";
import HttpError from "../utils/httpError.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";

export const registerParticipant = ctrlWrapper(async (req, res) => {
  const { fullName, email, birthday, source, eventId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    throw HttpError(400, "Invalid event ID");
  }

  const participant = new Participant({
    fullName,
    email,
    birthday,
    source,
    eventId,
    registrationDate: new Date(),
  });

  await participant.save();

  res.status(201).json({ message: "Registration successful!", participant });
});

export const getParticipantsByEvent = ctrlWrapper(async (req, res) => {
  const { eventId } = req.params;

  const participants = await Participant.find({ eventId }).select(
    "fullName email registrationDate"
  );

  if (!participants || participants.length === 0) {
    throw HttpError(404, "No participants found for this event");
  }

  res.status(200).json(participants);
});
