import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { WeatherPage } from './Weather';

// Mock fetch
const mockFetch = (url: string) => {
  if (url.startsWith('https://geocoding-api.open-meteo.com')) {
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ results: [{ name: 'Brisbane', country: 'Australia', latitude: -27.47, longitude: 153.03 }] }) });
  }
  if (url.startsWith('https://api.open-meteo.com')) {
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ current: { time: new Date().toISOString(), temperature_2m: 25.2, weather_code: 0, wind_speed_10m: 10 } }) });
  }
  return Promise.reject(new Error('Unknown URL'));
};

describe('WeatherPage', () => {
  beforeEach(() => {
    // @ts-expect-error overriding global fetch for test
    global.fetch = vi.fn(mockFetch);
  });

  it('prompts initially', () => {
    render(<WeatherPage />);
    expect(screen.getByLabelText(/prompt/i)).toBeInTheDocument();
  });

  it('fetches weather', async () => {
    render(<WeatherPage />);
    const input = screen.getByPlaceholderText(/enter a city/i);
    fireEvent.change(input, { target: { value: 'Brisbane' } });
    fireEvent.click(screen.getByRole('button', { name: /fetch weather/i }));
    expect(screen.getByRole('status')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole('img', { name: /clear sky/i })).toBeInTheDocument());
    expect(screen.getByText(/brisbane/i)).toBeInTheDocument();
  });
});
