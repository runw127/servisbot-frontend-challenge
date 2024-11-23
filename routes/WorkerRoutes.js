import express from 'express';
import WorkerController from '../controllers/WorkerController.js';

const router = express.Router();

router.get("/:id/workers", WorkerController.findRelatedWorkersById);
router.get("/:id/logs", WorkerController.findLogsByWorkerWithBot);

export default router;