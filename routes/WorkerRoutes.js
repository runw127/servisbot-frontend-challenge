import express from 'express';
import WorkerController from '../controllers/WorkerController.js';

const router = express.Router();

router.get("/:id/workers", WorkerController.findRelatedWorkersById);

export default router;