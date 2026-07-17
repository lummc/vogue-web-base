import { useEffect, useMemo, useState } from 'react';
import { Footer } from '../components/layout/Footer';
import { HeaderDesktop } from '../components/layout/HeaderDesktop';
import { PromoArticleCard } from '../components/cards/PromoArticleCard';
import { ArticleVoteBlock } from '../components/article/ArticleVoteBlock';
import { camilaArticle } from '../data/articleContent';
import { communityContent } from '../data/communityContent';
import type { PromoArticle } from '../data/mockContent';
import { isVogueUserLoggedIn, subscribeToVogueAuthChange } from '../utils/authState';
import { navigateTo } from '../utils/routes';
import '../styles/components.css';

type ProfileTabId = 'saved' | 'likes' | 'polls';

const profileTabs: Array<{ id: ProfileTabId; label: string }> = [
  { id: 'saved', label: 'Mis guardados' },
  { id: 'likes', label: 'Mis likes' },
  { id: 'polls', label: 'Mis encuestas' },
];

const pollFallback: PromoArticle[] = [
  {
    category: 'Estilo de vida',
    title: 'Que esperas del nuevo album de Camila Cabello?',
    imageAlt: 'Encuesta de Camila Cabello',
    imageTone: 'dark',
    imageSrc: camilaArticle.hero.imageSrc,
    href: '/articulo/camila',
  },
  {
    category: 'Vogue Choice',
    title: 'Met Gala 2026',
    imageAlt: 'Resultados de Vogue Choice',
    imageTone: 'ivory',
    imageSrc: communityContent.mostLiked[0].imageSrc,
  },
];

function getStoredArticles(key: string): PromoArticle[] {
  const stored = window.localStorage.getItem(key);

  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function MySpaceTemplate() {
  const [loggedIn, setLoggedIn] = useState(isVogueUserLoggedIn);
  const [activeTab, setActiveTab] = useState<ProfileTabId>('saved');

  useEffect(
    () =>
      subscribeToVogueAuthChange(() => {
        setLoggedIn(isVogueUserLoggedIn());
      }),
    [],
  );

  useEffect(() => {
    if (!loggedIn) {
      navigateTo('/registro', true);
    }
  }, [loggedIn]);

  const tabArticles = useMemo(
    () => ({
      saved: getStoredArticles('vogue-saved-articles').length
        ? getStoredArticles('vogue-saved-articles')
        : communityContent.saved,
      likes: getStoredArticles('vogue-liked-articles').length
        ? getStoredArticles('vogue-liked-articles')
        : communityContent.mostLiked.slice(0, 4),
      polls: getStoredArticles('vogue-poll-history').length
        ? getStoredArticles('vogue-poll-history')
        : pollFallback,
    }),
    [],
  );

  if (!loggedIn) {
    return null;
  }

  return (
    <div className="page-shell my-space-page-shell">
      <HeaderDesktop />
      <main className="my-space-page section-frame" aria-labelledby="my-space-title">
        <header className="my-space-page__header">
          <h1 id="my-space-title">Mi espacio</h1>
          <p>Maneja el contenido almacenado</p>
        </header>

        <div className="my-space-tabs" role="tablist" aria-label="Contenido de perfil">
          {profileTabs.map((tab) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={activeTab === tab.id ? 'is-active' : ''}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <section className="my-space-carousel" aria-label={profileTabs.find((tab) => tab.id === activeTab)?.label}>
          <div className="my-space-carousel__track">
            {tabArticles[activeTab].map((article) => (
              <PromoArticleCard article={article} key={`${activeTab}-${article.title}`} />
            ))}
          </div>
        </section>

        {activeTab === 'polls' && camilaArticle.vote ? (
          <div className="my-space-poll-summary">
            <ArticleVoteBlock vote={camilaArticle.vote} />
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
