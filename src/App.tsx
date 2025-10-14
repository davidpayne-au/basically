import { HashRouter, NavLink } from 'react-router-dom';
import { AppRoutes } from './routes';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded transition-colors duration-300 font-medium ${isActive ? 'bg-orange-600 text-white shadow-lg dark:bg-purple-500 dark:text-white' : 'text-white hover:bg-orange-500 dark:text-blue-200 dark:hover:bg-purple-600 dark:hover:text-white'} focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-purple-500`;

const App = () => {
  return (
    <HashRouter>
      <header className="w-full flex justify-start py-6 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 shadow-lg mb-0 animate-fade-in dark:from-blue-600 dark:via-purple-600 dark:to-pink-500">
        <nav className="flex gap-6 w-full max-w-5xl mx-auto px-4">
          <NavLink to="/" end className={navLinkClass} aria-label="Home">Hello</NavLink>
          <NavLink to="/about" className={navLinkClass} aria-label="About">About</NavLink>
          <NavLink to="/weather" className={navLinkClass} aria-label="Weather">Weather</NavLink>
        </nav>
      </header>
      <main
        id="main-content"
        className="flex-1 flex flex-col items-center justify-center animate-fade-in bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900 min-h-[60vh] w-full transition-colors duration-500 -mt-2"
      >
        <section className="w-full max-w-3xl rounded-xl shadow-xl p-8 bg-white/95 dark:bg-indigo-800/90 backdrop-blur-md">
          <AppRoutes />
        </section>
      </main>
    </HashRouter>
  );
};

export { App };
