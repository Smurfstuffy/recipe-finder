export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  summary: string;
  extendedIngredients: {
    id: number;
    original: string;
    amount: number;
    unit: string;
  }[];
}

export interface RecipesSearchResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RecipeSearchParams {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
}
