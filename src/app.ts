import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
dotenv.config();

const app: Application = express();

// Middleware

app.use(express.json());

app.use('/api/users',userRoutes)



// Root route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the user API",
  });
});

// Not Found Route Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global Error Handler (optional for bigger apps)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

export default app;
