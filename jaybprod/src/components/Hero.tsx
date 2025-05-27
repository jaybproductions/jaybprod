'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold tracking-tight mb-4"
      >
        Chris Blair
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl max-w-2xl text-gray-700 dark:text-gray-300 mb-8"
      >
        Software Engineer with a focus in AI systems • Auburn Graduate Student • Passionate about building intelligent, scalable, and modern software applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-6 mb-16"
      >
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md"
        >
          View Projects
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition shadow-md"
        >
          About Me
        </Link>
      </motion.div>
    </section>
  );
}