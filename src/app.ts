import express from "express";
import cors from "cors";
import { recipeRoutes } from "./routes/recipeRoutes";
import { notFound, errorHandler } from "./middleware/errorMiddleware";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/recipes", recipeRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send({ status: "OK" });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
