// Utility functions and mappings for Open-Meteo weather codes
// Reference: https://open-meteo.com/en/docs

export interface WeatherCodeInfo {
  code: number;
  label: string;
  icon: string; // emoji representation
}

const WEATHER_CODE_MAP: WeatherCodeInfo[] = [
  { code: 0, label: 'Clear sky', icon: '☀️' },
  { code: 1, label: 'Mainly clear', icon: '🌤️' },
  { code: 2, label: 'Partly cloudy', icon: '⛅' },
  { code: 3, label: 'Overcast', icon: '☁️' },
  { code: 45, label: 'Fog', icon: '🌫️' },
  { code: 48, label: 'Rime fog', icon: '🌫️' },
  { code: 51, label: 'Light drizzle', icon: '🌦️' },
  { code: 53, label: 'Moderate drizzle', icon: '🌦️' },
  { code: 55, label: 'Dense drizzle', icon: '🌧️' },
  { code: 61, label: 'Slight rain', icon: '🌦️' },
  { code: 63, label: 'Moderate rain', icon: '🌧️' },
  { code: 65, label: 'Heavy rain', icon: '🌧️' },
  { code: 71, label: 'Slight snow', icon: '🌨️' },
  { code: 73, label: 'Moderate snow', icon: '🌨️' },
  { code: 75, label: 'Heavy snow', icon: '❄️' },
  { code: 80, label: 'Rain showers', icon: '🌦️' },
  { code: 81, label: 'Rain showers', icon: '🌧️' },
  { code: 82, label: 'Violent rain showers', icon: '⛈️' },
  { code: 95, label: 'Thunderstorm', icon: '⛈️' },
  { code: 96, label: 'Thunderstorm w/ hail', icon: '🌩️' },
  { code: 99, label: 'Heavy hail storm', icon: '🌩️' }
];

export const getWeatherInfoForCode = (code: number): WeatherCodeInfo =>
  WEATHER_CODE_MAP.find((c) => c.code === code) || { code, label: 'Unknown', icon: '❔' };
