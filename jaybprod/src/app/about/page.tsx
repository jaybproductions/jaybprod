'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <main className="relative min-h-screen px-6 py-12 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[120vw] h-[120vh] bg-gradient-radial from-blue-400/20 via-transparent to-transparent animate-pulse-slow rounded-full blur-3xl" />
      </div>

      <section className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold tracking-tight mb-4"
        >
          Hi, I'm Jacob
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          A Senior Software Engineer and graduate student focused on scalable systems and AI-powered solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects <FaArrowRight className="text-sm" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 dark:text-blue-400 px-5 py-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            About Me
          </Link>
        </motion.div>
      </section>

      <div className="relative z-10 max-w-3xl mx-auto">
        <Link href="/" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition">
          ← Back to Home
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed mb-4">
            {`I'm`} a <strong>Senior Software Engineer</strong> and <strong>Tech Lead</strong> at a software ERP company. I specialize in designing scalable systems, leading cross-functional teams, and delivering robust backend and frontend solutions.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I graduated <strong>Summa Cum Laude</strong> from <strong>Southern New Hampshire University</strong> with a {`Bachelor’s`} in Computer Science, and {`I’m currently pursuing my Master’s`} in Software Engineering at <strong>Auburn University</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            {`I'm`} passionate about clean code, AI systems, and solving real-world problems with thoughtful architecture and modern technologies. Outside of work and school, I enjoy working on personal projects and constantly learning new tools and patterns.
          </p>

          <div className="border-l-4 border-blue-500 pl-4 my-6 text-left italic text-gray-700 dark:text-gray-300">
            “I believe elegant software comes from thoughtful design, not just clever code.”
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Timeline</h2>
          <ul className="border-l border-gray-300 dark:border-gray-600 pl-4">
            <li className="mb-6">
              <div className="font-bold text-lg">2023 - Present</div>
              <div className="text-sm">Master’s in Software Engineering – Auburn University</div>
            </li>
            <li className="mb-6">
              <div className="font-bold text-lg">2021 - Present</div>
              <div className="text-sm">Senior Software Engineer & Tech Lead – ERP Company</div>
            </li>
            <li className="mb-6">
              <div className="font-bold text-lg">2021</div>
              <div className="text-sm">Graduated Summa Cum Laude – SNHU, B.S. Computer Science</div>
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <p className="mb-4">Download my resume to learn more about my skills and experience.</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Download Resume
          </a>
        </motion.section>
      </div>
    </main>
  );
}

