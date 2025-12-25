import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PrehistoricPage from './pages/PrehistoricPage';
import EthnographicPage from './pages/EthnographicPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import ContactPage from './pages/ContactPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />
  },
  {
    name: 'About',
    path: '/about',
    element: <AboutPage />
  },
  {
    name: 'Blog',
    path: '/blog',
    element: <BlogPage />
  },
  {
    name: 'Prehistoric Collections',
    path: '/prehistoric',
    element: <PrehistoricPage />
  },
  {
    name: 'Ethnographic Exhibits',
    path: '/ethnographic',
    element: <EthnographicPage />
  },
  {
    name: 'Special Exhibitions',
    path: '/exhibitions',
    element: <ExhibitionsPage />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <ContactPage />
  }
];

export default routes;
