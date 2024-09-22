import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import projectRoutes from "./routes/projectRoutes";
import { conrsConfig } from "./config/cors";

dotenv.config()

connectDB()
const app = express();  

app.use(cors(conrsConfig) )

app.use(express.json());
// Routes
app.use("/api/projects", projectRoutes)

export default app;
