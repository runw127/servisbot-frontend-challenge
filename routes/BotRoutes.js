
import express from "express";
import BotController from "../controllers/BotController.js";

const router = express.Router();

router.get("/list", BotController.listAllBots);
router.get("/list/:id", BotController.findBotById);

export default router;

