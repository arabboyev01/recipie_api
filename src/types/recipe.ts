export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string | null;
  strArea: string | null;
  strInstructions: string | null;
  strMealThumb: string | null;
  strTags: string | null;
  strYoutube: string | null;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
  // Dynamic properties for ingredients and measures (1-20)
  [key: string]: string | null | undefined;
}

export interface Ingredient {
  name: string;
  measure: string;
}

export interface FormattedRecipe {
  id: string;
  name: string;
  category: string | null;
  area: string | null;
  instructions: string | null;
  thumbnail: string | null;
  tags: string[];
  youtube: string | null;
  ingredients: Ingredient[];
  source: string | null;
}

export interface RecipeResponse {
  meals: Recipe[] | null;
}

export interface FormattedRecipeResponse {
  recipe: FormattedRecipe;
}
