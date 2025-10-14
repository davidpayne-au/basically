import { useVersion } from '../../hooks/useVersion';
import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const AboutPage = () => {
  const { version, loading, error } = useVersion();
  return (
    <motion.section
      className="p-8 rounded-2xl border border-yellow-300 shadow bg-yellow-50 max-w-md mx-auto text-center animate-fade-in dark:bg-red-900 dark:border-yellow-600"
      initial="hidden"
      animate="visible"
      variants={aboutVariants}
      aria-label="about section"
    >
      <h1 className="text-4xl font-bold mb-2 text-red-700 dark:text-yellow-300">About</h1>
      <p className="text-lg text-gray-700 mb-4 dark:text-yellow-400">This is a simple React + Vite + Tailwind starter template with animated navigation and professional design.</p>
      <p className="text-base text-gray-600 dark:text-yellow-500">Built with accessibility and best practices in mind.</p>
      <div className="mt-6">
        {loading && <span className="text-gray-400">Loading version...</span>}
        {error && <span className="text-red-500">{error}</span>}
        {version && (
          <span className="text-red-700 dark:text-yellow-300 font-semibold">Version: {version}</span>
        )}
      </div>
    </motion.section>
  );
};
