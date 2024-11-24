import express from "express";
import BotRoutes from "./routes/BotRoutes.js";
import WorkerRoutes from "./routes/WorkerRoutes.js";
import db from "./models/index.js";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';
import seedDatabase from "./helpers/seedDatabase.js";

const app = express();

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    seedDatabase();
});

app.use("/api/v1/bot", BotRoutes);
app.use("/api/v1/worker", WorkerRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;