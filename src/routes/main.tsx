import { Route } from 'react-router-dom';
import { HelloPage, AboutPage } from '../pages';

const MainRoutes = (
  <>
    <Route path="/" element={<HelloPage />} />
    <Route path="/about" element={<AboutPage />} />
  </>
);

export { MainRoutes };
