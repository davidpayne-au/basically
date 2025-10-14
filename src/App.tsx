import { HashRouter, NavLink } from 'react-router-dom';
import { AppRoutes } from './routes';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded transition-colors duration-300 font-medium ${isActive ? 'bg-red-600 text-white shadow-lg dark:bg-red-500 dark:text-white' : 'text-white hover:bg-red-500 dark:text-yellow-300 dark:hover:bg-red-600 dark:hover:text-white'} focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-yellow-400`;

const App = () => {
  return (
    <HashRouter>
      <header className="w-full flex justify-start py-6 bg-gradient-to-r from-red-600 via-yellow-400 to-red-500 shadow-lg mb-0 animate-fade-in dark:from-red-900 dark:via-yellow-600 dark:to-red-800">
        <nav className="flex gap-6 w-full max-w-5xl mx-auto px-4">
          <NavLink to="/" end className={navLinkClass} aria-label="Home">Hello</NavLink>
          <NavLink to="/about" className={navLinkClass} aria-label="About">About</NavLink>
          <NavLink to="/weather" className={navLinkClass} aria-label="Weather">Weather</NavLink>
        </nav>
      </header>
      <main
        id="main-content"
        className="flex-1 flex flex-col items-center justify-center animate-fade-in bg-gradient-to-br from-yellow-50 via-yellow-100 to-red-100 dark:from-yellow-950 dark:via-red-950 dark:to-red-900 min-h-[60vh] w-full transition-colors duration-500 -mt-2"
      >
        <section className="w-full max-w-3xl rounded-xl shadow-xl p-8 bg-white/90 dark:bg-[#232946]/80 backdrop-blur-md">
          <AppRoutes />
        </section>
      </main>
    </HashRouter>
  );
};

export { App };
