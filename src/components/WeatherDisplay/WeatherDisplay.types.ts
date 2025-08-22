export interface WeatherDisplayProps {
  location: string;
  temperatureC: number;
  weatherLabel: string;
  icon: string;
  windSpeed?: number | null;
  fetchedAt?: string | null;
  isLoading?: boolean;
  error?: string | null;
}
