import { FormEvent, useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { WeatherDisplay } from '../../components/WeatherDisplay';

export const WeatherPage = () => {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);
  const { loading, error, locationLabel, temperatureC, weatherLabel, icon, windSpeed, fetchedAt } = useWeather(submitted);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setSubmitted(trimmed);
  };

  return (
    <section className="flex flex-col gap-8 items-center w-full" aria-label="weather page">
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 items-stretch w-full max-w-xl" aria-label="location form">
        <label htmlFor="location" className="sr-only">Location</label>
        <input id="location" name="location" placeholder="Enter a city e.g. Brisbane" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 px-4 py-3 rounded-lg border border-yellow-300 focus:ring-2 focus:ring-red-500 focus:outline-none shadow bg-yellow-50/90 dark:bg-red-900 dark:border-yellow-600 dark:text-yellow-300" aria-required="true" />
        <button type="submit" className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-red-700 dark:hover:bg-red-600" aria-label="fetch weather">Get Weather</button>
      </form>
      <div className="w-full max-w-xl min-h-64 flex items-center justify-center">
        {submitted ? (
          <WeatherDisplay location={locationLabel || submitted} temperatureC={temperatureC || 0} weatherLabel={weatherLabel || 'Loading'} icon={icon || '⌛'} windSpeed={windSpeed} fetchedAt={fetchedAt} isLoading={loading} error={error} />
        ) : (
          <p className="text-gray-600 dark:text-yellow-400" aria-label="prompt">Enter a location to see the current weather.</p>
        )}
      </div>
    </section>
  );
};
