import express from "express";
import BotRoutes from "./routes/BotRoutes.js";

const app = express();

app.use("/api/v1/bot", BotRoutes);

export default app;