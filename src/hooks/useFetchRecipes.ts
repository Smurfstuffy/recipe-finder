import type {RecipeSearchParams, RecipesSearchResponse} from '@/types';

export async function fetchRecipes(
  searchParams: RecipeSearchParams,
): Promise<RecipesSearchResponse> {
  const params = new URLSearchParams();

  const query = searchParams.query;
  const cuisine = searchParams.cuisine;
  const maxReadyTime = searchParams.maxReadyTime;

  if (query) params.append('query', query);
  if (cuisine) params.append('cuisine', cuisine);
  if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);

  const baseUrl = process.env.WEB_URL;

  const response = await fetch(`${baseUrl}/api/recipes?${params.toString()}`, {
    next: {revalidate: 60},
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  return response.json();
}
