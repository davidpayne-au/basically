import { useState } from 'react';
import type { HelloProps } from './Hello.types';

/**
 * Renders a simple greeting message.
 */
export const Hello = ({ name, greeting = 'Hello' }: HelloProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      aria-label="greeting"
      className="p-8 rounded-2xl border border-orange-200 shadow transition-all text-center bg-gradient-to-br from-yellow-50 to-orange-100 max-w-md mx-auto dark:bg-gradient-to-br dark:from-purple-800 dark:to-indigo-700 dark:border-purple-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className={`text-4xl font-bold mb-2 text-gray-900 transition-transform ${isHovered ? 'scale-105' : ''} dark:text-yellow-100`}>
        {greeting}, {name}!
      </h1>
      <p className="text-lg text-gray-500 dark:text-yellow-300">Welcome to your React app</p>
    </section>
  );
};
