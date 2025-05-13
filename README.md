# Recipe Finder Application

A modern web application built with Next.js that allows users to search for recipes using the Spoonacular API. Users can search by keywords, filter by cuisine type, and specify maximum preparation time to find their perfect recipe.

## Features

- 🔍 Recipe search with keyword input
- 🌍 Filter recipes by cuisine type (Italian, Mexican, Chinese, etc.)
- ⏲️ Filter by maximum preparation time
- 📖 Detailed recipe view with ingredients and instructions
- 📱 Responsive design for all devices
- ⚡ Server-side rendering with 1-minute caching for optimal performance

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Spoonacular API key ([Get it here](https://spoonacular.com/food-api))

### Installation

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   cd recipe-finder
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with:

   ```
   SPOONACULAR_API_KEY=your_api_key_here
   NEXT_PUBLIC_SPOONACULAR_API_URL=https://api.spoonacular.com/recipes
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Spoonacular Food API
- **Caching**: Server-side caching with revalidation
- **Loading States**: React Suspense with skeleton loading
- **Code Quality**: ESLint & Prettier

## Project Structure

```
src/
├── app/                # Next.js app router pages
├── components/         # Reusable React components
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── constants/         # Constant values and configurations
```

## Performance Features

- Server-side rendering for optimal SEO
- 1-minute cache invalidation for fresh data
- Skeleton loading states for better UX
- Optimized image loading with Next.js Image component

## Development

The project uses ESLint and Prettier for code quality. Before committing, ensure your code passes linting:

```bash
npm run lint
# or
yarn lint
```

## License

This project is open source and available under the MIT License.
