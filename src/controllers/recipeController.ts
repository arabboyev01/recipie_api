import { Request, Response } from "express";
import axios from "axios";
import { Recipe, FormattedRecipe } from "../types/recipe";
import { formatRecipeData } from "../utils/formatRecipies";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Get available recipes with optional filters
export const getAvailableRecipes = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { ingredient, country, category, search } = req.query;
    let endpoint = "";

    // Apply filters based on query parameters
    if (ingredient) {
      endpoint = `${API_BASE_URL}/filter.php?i=${ingredient}`;
    } else if (country) {
      endpoint = `${API_BASE_URL}/filter.php?a=${country}`;
    } else if (category) {
      endpoint = `${API_BASE_URL}/filter.php?c=${category}`;
    } else {
      // Default: search for all recipes or by name if search parameter is provided
      endpoint = `${API_BASE_URL}/search.php?s=${search || ""}`;
    }

    const response = await axios.get(endpoint);

    if (!response.data.meals) {
      res.status(404).json({ message: "No recipes found" });
      return;
    }

    // Format the response data when using search endpoint
    if (!ingredient && !country && !category) {
      const formattedRecipes = response.data.meals.map((recipe: Recipe) =>
        formatRecipeData(recipe)
      );
      res.status(200).json({ meals: formattedRecipes });
      return
    }

    // For filtered endpoints, the API returns limited data
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({
      message: "Failed to fetch recipes",
      error: (error as Error).message,
    });
  }
};

// Get detailed information for a specific recipe
export const getRecipeInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Recipe ID is required" });
      return;
    }

    const endpoint = `${API_BASE_URL}/lookup.php?i=${id}`;
    const response = await axios.get(endpoint);

    if (!response.data.meals) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }

    // Format the recipe data
    const formattedRecipe = formatRecipeData(response.data.meals[0]);

    res.status(200).json({ recipe: formattedRecipe });
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    res.status(500).json({
      message: "Failed to fetch recipe details",
      error: (error as Error).message,
    });
  }
};
