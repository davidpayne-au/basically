import { HashRouter, NavLink } from 'react-router-dom';
import { AppRoutes } from './routes';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded transition-colors duration-300 font-medium ${isActive ? 'bg-yellow-700 text-white shadow-lg dark:bg-yellow-500 dark:text-white' : 'text-white hover:bg-yellow-600 dark:text-yellow-200 dark:hover:bg-yellow-700 dark:hover:text-white'} focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500`;

const App = () => {
  return (
    <HashRouter>
      <header className="w-full flex justify-start py-6 bg-gradient-to-r from-yellow-900 via-yellow-800 to-gray-900 shadow-lg mb-0 animate-fade-in dark:from-[#0a0f1c] dark:via-[#151a2b] dark:to-[#232946]">
        <nav className="flex gap-6 w-full max-w-5xl mx-auto px-4">
          <NavLink to="/" end className={navLinkClass} aria-label="Home">Hello</NavLink>
          <NavLink to="/about" className={navLinkClass} aria-label="About">About</NavLink>
          <NavLink to="/weather" className={navLinkClass} aria-label="Weather">Weather</NavLink>
        </nav>
      </header>
      <main
        id="main-content"
        className="flex-1 flex flex-col items-center justify-center animate-fade-in bg-gradient-to-br from-white via-gray-100 to-yellow-100 dark:from-[#181e2a] dark:via-[#232946] dark:to-[#232946] min-h-[60vh] w-full transition-colors duration-500 -mt-2"
      >
        <section className="w-full max-w-3xl rounded-xl shadow-xl p-8 bg-white/90 dark:bg-[#232946]/80 backdrop-blur-md">
          <AppRoutes />
        </section>
      </main>
    </HashRouter>
  );
};

export { App };
