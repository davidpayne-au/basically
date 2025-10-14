import { motion } from 'framer-motion';
import type { WeatherDisplayProps } from './WeatherDisplay.types';

const variants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } };

export const WeatherDisplay = ({ location, temperatureC, weatherLabel, icon, windSpeed, fetchedAt, isLoading, error }: WeatherDisplayProps) => {
  if (isLoading) {
    return (
      <div role="status" aria-label="loading weather" className="flex flex-col items-center gap-3 p-8">
        <div className="w-14 h-14 rounded-full border-4 border-yellow-400 border-t-red-500 animate-spin" />
        <p className="text-red-600 dark:text-yellow-300 font-medium">Fetching weather...</p>
      </div>
    );
  }
  if (error) return <p role="alert" className="text-red-600 font-medium">{error}</p>;
  return (
    <motion.div className="p-6 rounded-2xl border border-yellow-300 shadow bg-yellow-50/90 dark:bg-red-900/70 dark:border-yellow-600 text-center backdrop-blur-md" variants={variants} initial="hidden" animate="visible" aria-label="weather result">
      <div className="flex flex-col items-center gap-2">
        <span role="img" aria-label={weatherLabel} className="text-6xl drop-shadow-sm select-none">{icon}</span>
        <h2 className="text-2xl font-semibold text-red-800 dark:text-yellow-300">{location}</h2>
        <p className="text-lg text-red-600 dark:text-yellow-400">{weatherLabel}</p>
        <p className="text-4xl font-bold text-red-700 dark:text-yellow-300">{Math.round(temperatureC)}°C</p>
        {windSpeed != null && <p className="text-sm text-gray-600 dark:text-yellow-500">Wind: {Math.round(windSpeed)} km/h</p>}
        {fetchedAt && <p className="text-xs text-gray-500 dark:text-yellow-600">As of {new Date(fetchedAt).toLocaleTimeString()}</p>}
      </div>
    </motion.div>
  );
};
