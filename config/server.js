import dotenv from 'dotenv';
import app from "../app.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

app.set("port", PORT);

// test route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to servisBot" });
  });

app.listen(PORT, () => {
  console.log(`Express server started and running on ${PORT}!`);
});