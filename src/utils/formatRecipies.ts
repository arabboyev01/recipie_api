import { Recipe, FormattedRecipe } from "../types/recipe";

export // Helper function to format recipe data
const formatRecipeData = (recipe: Recipe): FormattedRecipe => {
  const ingredients = [];

  // Loop through the ingredient and measure properties
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
    const measure = recipe[`strMeasure${i}` as keyof Recipe];

    // Only add if ingredient exists and is not empty
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        name: ingredient,
        measure: measure || "",
      });
    }
  }

  return {
    id: recipe.idMeal,
    name: recipe.strMeal,
    category: recipe.strCategory,
    area: recipe.strArea,
    instructions: recipe.strInstructions,
    thumbnail: recipe.strMealThumb,
    tags: recipe.strTags
      ? recipe.strTags.split(",").map((tag) => tag.trim())
      : [],
    youtube: recipe.strYoutube,
    ingredients,
    source: recipe.strSource,
  };
};