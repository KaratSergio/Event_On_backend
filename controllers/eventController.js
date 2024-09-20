import Event from "../models/EventModel.js";
import HttpError from "../utils/httpError.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";

export const getAllEvents = ctrlWrapper(async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const totalEvents = await Event.countDocuments();
  const events = await Event.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));

  if (!events || events.length === 0) {
    throw HttpError(404, "Events not found");
  }

  res.status(200).json({
    events,
    totalPages: Math.ceil(totalEvents / limit),
    currentPage: Number(page),
  });
});
