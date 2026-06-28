import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthRequiredPrompt } from './components/auth/AuthRequiredPrompt';
import { HomeTemplate } from './templates/HomeTemplate';
import { SearchTemplate } from './templates/SearchTemplate';
import { ArticleTemplate } from './templates/ArticleTemplate';
import { AuthTemplate } from './templates/AuthTemplate';
import { CommunityTemplate } from './templates/CommunityTemplate';
import { SectionTemplate } from './templates/SectionTemplate';
import { bafweekArticle, camilaArticle, guadalajaraArticle } from './data/articleContent';
import { homePage } from './data/mockContent';
import {
  bellezaSection,
  convocatoriasSection,
  estiloDeVidaSection,
  hollywoodSection,
  modaSection,
  vogueMediaSection,
} from './data/sectionContent';
import { readRoutePath } from './utils/routes';
import { useHorizontalCarouselDrag } from './hooks/useHorizontalCarouselDrag';
import './styles/global.css';

const sectionPages = {
  '/moda': modaSection,
  '/belleza': bellezaSection,
  '/estilo-de-vida': estiloDeVidaSection,
  '/hollywood': hollywoodSection,
  '/convocatorias': convocatoriasSection,
  '/vogue-media': vogueMediaSection,
};

const articlePages = {
  '/articulo/camila': camilaArticle,
  '/articulo/guadalajara': guadalajaraArticle,
  '/articulo/bafweek': bafweekArticle,
};

function resolvePage(path: string) {
  const sectionData = sectionPages[path as keyof typeof sectionPages];
  const articleData = articlePages[path as keyof typeof articlePages];

  return path === '/registro' ? (
    <AuthTemplate />
  ) : path === '/login' ? (
    <AuthTemplate mode="login" />
  ) : path === '/busqueda' ? (
    <SearchTemplate />
  ) : path === '/comunidad' ? (
    <CommunityTemplate />
  ) : articleData ? (
    <ArticleTemplate article={articleData} />
  ) : sectionData ? (
    <SectionTemplate data={sectionData} />
  ) : (
    <HomeTemplate data={homePage} />
  );
}

function App() {
  const [path, setPath] = useState(readRoutePath());
  useHorizontalCarouselDrag();

  useEffect(() => {
    const handleHashChange = () => setPath(readRoutePath());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {resolvePage(path)}
      <AuthRequiredPrompt />
    </>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
