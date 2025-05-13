import {Suspense} from 'react';
import {Metadata} from 'next';
import Link from 'next/link';
import RecipeGridSkeleton from '@/components/recipes/RecipeSkeleton';
import {RecipeSearchParams} from '@/types';
import RecipeResults from '@/components/recipes/RecipeResults';

export const metadata: Metadata = {
  title: 'Recipe Results',
  description: 'Recipe results for your search',
};

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<RecipeSearchParams>;
}) {
  const {query, cuisine, maxReadyTime} = await searchParams;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">
            Recipe Results
          </h1>
          <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
            Click on a recipe to view its details
          </p>
          <div className="flex justify-center mb-12">
            <Link
              href="/"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 font-medium shadow-sm hover:shadow-md"
            >
              ← Back to Search
            </Link>
          </div>
          <Suspense fallback={<RecipeGridSkeleton />}>
            <RecipeResults
              query={query}
              cuisine={cuisine}
              maxReadyTime={maxReadyTime}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
