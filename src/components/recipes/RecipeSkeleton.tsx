function RecipeSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="relative w-full pt-[75%] bg-gray-200 dark:bg-gray-700 animate-pulse" />
      <div className="p-4">
        <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
  );
}

export default function RecipeGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({length: 9}).map((_, index) => (
        <RecipeSkeleton key={index} />
      ))}
    </div>
  );
}
