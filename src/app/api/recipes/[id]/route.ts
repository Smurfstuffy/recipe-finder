import {NextResponse} from 'next/server';

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const SPOONACULAR_API_URL = process.env.NEXT_PUBLIC_SPOONACULAR_API_URL;

if (!SPOONACULAR_API_KEY) {
  throw new Error('SPOONACULAR_API_KEY is not defined');
}

if (!SPOONACULAR_API_URL) {
  throw new Error('NEXT_PUBLIC_SPOONACULAR_API_URL is not defined');
}

export async function GET(
  request: Request,
  {params}: {params: Promise<{id: string}>},
) {
  try {
    const {id} = await params;

    const response = await fetch(
      `${SPOONACULAR_API_URL}/recipes/${id}/information?apiKey=${SPOONACULAR_API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch recipe details');
    }

    const data = await response.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60',
      },
    });
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return NextResponse.json(
      {error: 'Failed to fetch recipe details'},
      {status: 500},
    );
  }
}
