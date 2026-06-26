import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HomeTemplate } from './templates/HomeTemplate';
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
import './styles/global.css';

const sectionPages = {
  '/moda': modaSection,
  '/belleza': bellezaSection,
  '/estilo-de-vida': estiloDeVidaSection,
  '/hollywood': hollywoodSection,
  '/convocatorias': convocatoriasSection,
  '/vogue-media': vogueMediaSection,
};

const sectionData = sectionPages[window.location.pathname as keyof typeof sectionPages];
const articlePages = {
  '/articulo/camila': camilaArticle,
  '/articulo/guadalajara': guadalajaraArticle,
  '/articulo/bafweek': bafweekArticle,
};

const articleData = articlePages[window.location.pathname as keyof typeof articlePages];
const path = window.location.pathname;
const page =
  path === '/registro' ? (
    <AuthTemplate />
  ) : path === '/login' ? (
    <AuthTemplate mode="login" />
  ) : path === '/comunidad' ? (
    <CommunityTemplate />
  ) : articleData ? (
    <ArticleTemplate article={articleData} />
  ) : sectionData ? (
    <SectionTemplate data={sectionData} />
  ) : (
    <HomeTemplate data={homePage} />
  );

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {page}
  </StrictMode>,
);
