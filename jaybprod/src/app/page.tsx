import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';

async function getRepos() {
  const res = await fetch('https://api.github.com/users/jaybproductions/repos', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const data = await res.json();

  return data
    .filter((repo: any) => !repo.fork && !repo.archived)
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
}

export default async function Home() {
  const projects = await getRepos();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <Hero />
      <FeaturedProjects projects={projects} />
    </main>
  );
}