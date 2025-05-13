import {Suspense} from 'react';
import {Metadata} from 'next';
import RecipeDetails from '@/components/recipe/RecipeDetails';
import {RecipeDetailsSkeleton} from '@/components/recipe/RecipeDetailsSkeleton';

export const metadata: Metadata = {
  title: 'Recipe Details',
  description: 'Detailed recipe information',
};

export default async function RecipePage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const {id} = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<RecipeDetailsSkeleton />}>
            <RecipeDetails id={id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
