import {Recipe} from '@/types';
import Link from 'next/link';
import Image from 'next/image';

export default function RecipeCard({recipe}: {recipe: Recipe}) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
    >
      <div className="relative w-full pt-[75%]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover absolute inset-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
          {recipe.title}
        </h2>
      </div>
    </Link>
  );
}
