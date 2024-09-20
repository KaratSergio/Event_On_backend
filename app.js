import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

import eventRoutes from "./routes/eventRoutes.js";
import participantRoutes from "./routes/participantRoutes.js";

export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/events", eventRoutes);
app.use("/participants", participantRoutes);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
