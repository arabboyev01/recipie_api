import { Router } from "express";
import {
  getAvailableRecipes,
  getRecipeInfo,
} from "../controllers/recipeController";

const router = Router();

// GET available recipes with optional filters
router.get("/", getAvailableRecipes);

// GET detailed information for a specific recipe
router.get("/:id", getRecipeInfo);

export const recipeRoutes = router;
