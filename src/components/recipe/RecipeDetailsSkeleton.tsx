export const RecipeDetailsSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-pulse">
    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-6"></div>

    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded mr-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
      </div>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded mr-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
      </div>
    </div>

    <div className="mb-8">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4"></div>
      <div className="space-y-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"
          ></div>
        ))}
      </div>
    </div>

    <div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4"></div>
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"
          ></div>
        ))}
      </div>
    </div>
  </div>
);
