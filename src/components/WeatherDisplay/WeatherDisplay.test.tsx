import { render, screen } from '@testing-library/react';
import { WeatherDisplay } from './WeatherDisplay';

describe('WeatherDisplay', () => {
  it('shows loading', () => {
    render(<WeatherDisplay location="Test" temperatureC={20} weatherLabel="Clear" icon="☀️" isLoading />);
    expect(screen.getByRole('status', { name: /loading weather/i })).toBeInTheDocument();
  });
  it('shows error', () => {
    render(<WeatherDisplay location="Test" temperatureC={20} weatherLabel="Clear" icon="☀️" error="Err" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Err');
  });
  it('shows weather info', () => {
    render(<WeatherDisplay location="Test" temperatureC={21.4} weatherLabel="Clear sky" icon="☀️" fetchedAt={new Date().toISOString()} />);
    expect(screen.getByRole('img', { name: /clear sky/i })).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
