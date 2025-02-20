import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorMiddleware";

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/api/users", userRoutes);

//Error handling
app.use(errorHandler);

export default app;