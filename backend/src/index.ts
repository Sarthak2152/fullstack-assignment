import express from "express";
import dotenv from "dotenv";
import cardRoutes from "./routes/Card.router";
import { connectDB } from "./config/db";
import cors from "cors";
dotenv.config({ path: ".env.local" });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/cards", cardRoutes);

// DB Connection
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running 🚀 on port ${process.env.PORT}`);
});

export default app;
