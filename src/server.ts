import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import projectRoutes from "./routes/projectRoutes";
import { conrsConfig } from "./config/cors";
import morgan from "morgan";

dotenv.config();

connectDB();
const app = express();

app.use(cors(conrsConfig));

// Login
app.use(morgan("dev"));

// leer datos del formulario
app.use(express.json());
// Routes
app.use("/api/auth", projectRoutes);
app.use("/api/projects", projectRoutes);

export default app;
