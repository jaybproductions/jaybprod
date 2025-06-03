// components/ProjectsGrid.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

type Project = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
};

export default function ProjectsGrid({ repos }: { repos: Project[] }) {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition">
          ← Back to Home
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
          <p className="text-center text-lg mb-10">A collection of open source and personal projects built with passion.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description || 'No description provided.'}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>★ {project.stargazers_count}</span>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  <FaGithub /> View Repo
                </a>
              </div>
              </motion.div>
          ))}
        </div>
        </motion.section>
      </div>
    </main>
  );
}
