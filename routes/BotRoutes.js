
import express from "express";
import BotController from "../controllers/BotController.js";

const router = express.Router();

router.get("/list", BotController.listAllBots);

export default router;

