import express from "express";
import BotRoutes from "./routes/BotRoutes.js";
import WorkerRoutes from "./routes/WorkerRoutes.js";
import db from "./models/index.js";
import seedDatabase from "./helpers/seedDatabase.js";

const app = express();

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    seedDatabase();
});

app.use("/api/v1/bot", BotRoutes);
app.use("/api/v1/worker", WorkerRoutes);

export default app;