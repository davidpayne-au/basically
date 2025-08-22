import { useEffect, useRef, useState } from 'react';
import { getWeatherInfoForCode } from '../utils/weather';

interface GeocodingResult {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
}

interface WeatherCurrentResponse {
  current?: {
    time: string;
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m?: number;
  };
}

export interface UseWeatherState {
  loading: boolean;
  error: string | null;
  locationLabel: string | null;
  temperatureC: number | null;
  weatherCode: number | null;
  weatherLabel: string | null;
  icon: string | null;
  windSpeed: number | null;
  fetchedAt: string | null;
}

export const useWeather = (query: string | null) => {
  const [state, setState] = useState<UseWeatherState>({
    loading: false,
    error: null,
    locationLabel: null,
    temperatureC: null,
    weatherCode: null,
    weatherLabel: null,
    icon: null,
    windSpeed: null,
    fetchedAt: null
  });
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query) return;
    const run = async () => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        const geoResp = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`,
          { signal: controller.signal }
        );
        if (!geoResp.ok) throw new Error('Geocoding failed');
        const geoJson = await geoResp.json();
        const result: GeocodingResult | undefined = geoJson?.results?.[0];
        if (!result) throw new Error('Location not found');
        const { latitude, longitude, name, country } = result;
        const weatherResp = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m`,
          { signal: controller.signal }
        );
        if (!weatherResp.ok) throw new Error('Weather fetch failed');
        const weatherJson: WeatherCurrentResponse = await weatherResp.json();
        const current = weatherJson.current;
        if (!current) throw new Error('No current weather');
        const info = getWeatherInfoForCode(current.weather_code);
        setState({
          loading: false,
          error: null,
          locationLabel: country ? `${name}, ${country}` : name,
          temperatureC: current.temperature_2m,
          weatherCode: current.weather_code,
          weatherLabel: info.label,
          icon: info.icon,
          windSpeed: current.wind_speed_10m ?? null,
          fetchedAt: current.time
        });
      } catch (e: unknown) {
        if ((e as Error).name === 'AbortError') return;
        setState((s) => ({ ...s, loading: false, error: (e as Error).message }));
      }
    };
    run();
    return () => abortRef.current?.abort();
  }, [query]);

  return state;
};
