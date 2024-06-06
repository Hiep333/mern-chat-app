import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 8888;

dotenv.config();

app.use(express.json());
app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
