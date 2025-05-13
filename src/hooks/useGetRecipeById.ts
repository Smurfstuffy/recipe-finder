import type {Recipe} from '@/types';

export async function getRecipeById(id: string): Promise<Recipe> {
  const baseUrl = process.env.WEB_URL;

  const response = await fetch(`${baseUrl}/api/recipes/${id}`, {
    next: {revalidate: 60},
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recipe details');
  }

  return response.json();
}
