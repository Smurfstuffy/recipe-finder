import {NextResponse} from 'next/server';

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const SPOONACULAR_API_URL = process.env.NEXT_PUBLIC_SPOONACULAR_API_URL;

if (!SPOONACULAR_API_KEY) {
  throw new Error('SPOONACULAR_API_KEY is not defined');
}

if (!SPOONACULAR_API_URL) {
  throw new Error('NEXT_PUBLIC_SPOONACULAR_API_URL is not defined');
}

export async function GET(request: Request) {
  try {
    const {searchParams} = new URL(request.url);
    const query = searchParams.get('query');
    const cuisine = searchParams.get('cuisine');
    const maxReadyTime = searchParams.get('maxReadyTime');

    const params = new URLSearchParams();
    params.append('apiKey', SPOONACULAR_API_KEY ?? '');
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);

    const response = await fetch(
      `${SPOONACULAR_API_URL}/recipes/complexSearch?${params.toString()}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }

    const data = await response.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60',
      },
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json({error: 'Failed to fetch recipes'}, {status: 500});
  }
}
