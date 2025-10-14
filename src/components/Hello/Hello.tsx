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
      className="p-8 rounded-2xl border border-yellow-300 shadow transition-all text-center bg-yellow-50 max-w-md mx-auto dark:bg-red-900 dark:border-yellow-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className={`text-4xl font-bold mb-2 text-red-700 transition-transform ${isHovered ? 'scale-105' : ''} dark:text-yellow-300`}>
        {greeting}, {name}!
      </h1>
      <p className="text-lg text-red-600 dark:text-yellow-400">Welcome to your React app</p>
    </section>
  );
};
