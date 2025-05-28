'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Project = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
};

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {project.description || 'No description provided.'}
            </p>
            <p className="text-sm text-gray-500 mb-2">{project.language}</p>
            <Link
              href={project.html_url}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
            >
              View on GitHub
            </Link>
          </motion.div>
        ))}
      </section>

      {projects.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </div>
      )}
    </>
  );
}