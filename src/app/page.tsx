'use client';

import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {CUISINES} from '@/constants/cuisines';

export default function Home() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    query: '',
    cuisine: '',
    maxReadyTime: '',
  });
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  useEffect(() => {
    const hasValue = Object.values(searchParams).some(value => value !== '');
    setIsNextEnabled(hasValue);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (searchParams.query) params.append('query', searchParams.query);
    if (searchParams.cuisine) params.append('cuisine', searchParams.cuisine);
    if (searchParams.maxReadyTime)
      params.append('maxReadyTime', searchParams.maxReadyTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">
            Recipe Finder
          </h1>
          <p className="text-center mb-12 text-gray-600 dark:text-gray-300">
            Find the perfect recipe for your next meal
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <div>
              <label
                htmlFor="query"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                What would you like to cook?
              </label>
              <input
                type="text"
                id="query"
                placeholder="Enter a dish or ingredient..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                value={searchParams.query}
                onChange={e =>
                  setSearchParams({...searchParams, query: e.target.value})
                }
              />
            </div>

            <div>
              <label
                htmlFor="cuisine"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Cuisine Type
              </label>
              <select
                id="cuisine"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                value={searchParams.cuisine}
                onChange={e =>
                  setSearchParams({...searchParams, cuisine: e.target.value})
                }
              >
                <option value="">Select a cuisine</option>
                {CUISINES.map(cuisine => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="maxReadyTime"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Maximum Preparation Time (minutes)
              </label>
              <input
                type="number"
                id="maxReadyTime"
                min="1"
                placeholder="e.g., 30"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                value={searchParams.maxReadyTime}
                onChange={e =>
                  setSearchParams({
                    ...searchParams,
                    maxReadyTime: e.target.value,
                  })
                }
              />
            </div>

            <button
              type="submit"
              disabled={!isNextEnabled}
              className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors
                ${
                  isNextEnabled
                    ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
