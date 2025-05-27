'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((id) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: id * 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">Project Title {id}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Short project description goes here. Highlight the technical challenges, tools used, and the impact of your solution.
          </p>
          <Link
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub
          </Link>
        </motion.div>
      ))}
    </section>
  );
}