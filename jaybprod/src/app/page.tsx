'use client';

import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
