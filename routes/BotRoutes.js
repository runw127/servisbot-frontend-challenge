import express from "express";
import BotController from "../controllers/BotController.js";

const router = express.Router();

router.get("/list", BotController.listAllBots);
router.get("/list/:id", BotController.findBotById);

router.get("/list/:id/workers", BotController.findBotByIdWithItsWorkers);

router.get("/list/:id/logs", BotController.findBotByIdWithItsLogs);

export default router;