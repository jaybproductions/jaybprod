// app/projects/page.tsx
import ProjectsGrid from '../../components/ProjectsGrid';

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

export default async function ProjectsPage() {
  const repos = await getRepos();

  return <ProjectsGrid repos={repos} />;
}
