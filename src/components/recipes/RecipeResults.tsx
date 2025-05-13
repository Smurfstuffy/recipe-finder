import {RecipeSearchParams} from '@/types';
import RecipeGrid from './RecipeGrid';
import {fetchRecipes} from '@/hooks/useFetchRecipes';

export default async function RecipeResults({
  query,
  cuisine,
  maxReadyTime,
}: RecipeSearchParams) {
  try {
    const data = await fetchRecipes({query, cuisine, maxReadyTime});
    return <RecipeGrid recipes={data.results} />;
  } catch {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400">
          Error loading recipes. Please try again later.
        </p>
      </div>
    );
  }
}
