import express from "express";
import BotRoutes from "./routes/BotRoutes.js";
import Bot from "./models/BotModel.js";
import Worker from './models/WorkerModel.js';

const app = express();
import db from "./models/index.js";

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    Bot.create({
        name: 'Bot Two',
        description: 'This is another test bot',
        status: 'ENABLED',
        workers: [
          {
            name: 'Worker Three',
            description: 'First worker for Bot Two',
          },
          {
            name: 'Worker Four',
            description: 'Second worker for Bot Two',
          },
        ],
      }, {
        include: { model: Worker, as: 'workers' }, // Include association
      });
});

app.use("/api/v1/bot", BotRoutes);

export default app;