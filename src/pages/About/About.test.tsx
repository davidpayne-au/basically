import { render, screen } from '@testing-library/react';
import { AboutPage } from './About';

describe('AboutPage', () => {
  it('renders About heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });
});
