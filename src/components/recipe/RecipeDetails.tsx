import {getRecipeById} from '@/hooks/useGetRecipeById';

export default async function RecipeDetails({id}: {id: string}) {
  const recipe = await getRecipeById(id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
        {recipe.title}
      </h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <span className="material-icons mr-2">schedule</span>
          <span>Ready in {recipe.readyInMinutes} minutes</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <span className="material-icons mr-2">people</span>
          <span>Serves {recipe.servings}</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.original}</li>
          ))}
        </ul>
      </div>

      {recipe.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Summary
          </h2>
          <div
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{__html: recipe.summary}}
          />
        </div>
      )}
    </div>
  );
}
