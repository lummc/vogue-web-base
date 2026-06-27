import { Bookmark, Eye, Heart } from 'lucide-react';
import { useEffect } from 'react';
import { LookVoteCard } from '../components/cards/LookVoteCard';
import { PromoArticleCard } from '../components/cards/PromoArticleCard';
import { Footer } from '../components/layout/Footer';
import { HeaderDesktop } from '../components/layout/HeaderDesktop';
import { communityContent } from '../data/communityContent';
import type { PromoArticle } from '../data/mockContent';
import { isVogueUserLoggedIn } from '../utils/authState';
import { navigateTo } from '../utils/routes';
import '../styles/components.css';

type MetricArticle = PromoArticle & { metric: string };

function MetricCard({ article, icon }: { article: MetricArticle; icon: 'eye' | 'bookmark' | 'heart' }) {
  const Icon = icon === 'eye' ? Eye : icon === 'bookmark' ? Bookmark : Heart;

  return (
    <article className="community-metric-card">
      <div
        className={`community-metric-card__media community-metric-card__media--${article.imageTone}`}
        role="img"
        aria-label={article.imageAlt}
      >
        {article.imageSrc ? <img src={article.imageSrc} alt={article.imageAlt} /> : null}
      </div>
      <p>{article.category}</p>
      <h3>{article.title}</h3>
      <div className="community-metric-card__metric">
        <Icon size={14} strokeWidth={1.7} />
        <span>{article.metric}</span>
      </div>
    </article>
  );
}

function RankingSection({
  title,
  articles,
  icon,
}: {
  title: string;
  articles: MetricArticle[];
  icon: 'eye' | 'bookmark' | 'heart';
}) {
  return (
    <section className="community-ranking" aria-labelledby={`${title}-title`}>
      <h2 id={`${title}-title`}>{title}</h2>
      <div className="community-ranking__grid">
        {articles.map((article) => (
          <MetricCard article={article} icon={icon} key={`${title}-${article.title}`} />
        ))}
      </div>
    </section>
  );
}

export function CommunityTemplate() {
  const loggedIn = isVogueUserLoggedIn();

  useEffect(() => {
    if (!loggedIn) {
      navigateTo('/registro', true);
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return null;
  }

  return (
    <div className="page-shell community-page-shell">
      <HeaderDesktop />
      <main className="community-page section-frame">
        <section className="community-strip" aria-labelledby="saved-title">
          <h1 id="saved-title">Mis guardados</h1>
          <p>Los articulos que mas te interesaron</p>
          <div className="community-card-row">
            {communityContent.saved.map((article) => (
              <PromoArticleCard article={article} key={article.title} />
            ))}
          </div>
        </section>

        <hr className="community-divider" />

        <section className="community-strip" aria-labelledby="likes-title">
          <h2 id="likes-title">Mis likes</h2>
          <p>Encuentra las fotos y los articulos a los que le diste like</p>
          <div className="community-look-row">
            {communityContent.likedLooks.map((look) => (
              <LookVoteCard look={look} key={look.id} />
            ))}
          </div>
          <div className="community-card-row community-card-row--likes">
            {communityContent.likedArticles.map((article) => (
              <PromoArticleCard article={article} key={article.title} />
            ))}
          </div>
        </section>

        <hr className="community-divider" />

        <section className="community-strip community-polls" aria-labelledby="polls-title">
          <h2 id="polls-title">Mis encuestas</h2>
          <p>Los resultados de las encuestas en las que participaste</p>
          <div className="community-poll-card">
            <h3>¿Que esperas del nuevo album de Camila Cabello?</h3>
            <div>
              <span>Mas sonidos latinos</span>
              <strong>30%</strong>
              <i style={{ width: '30%' }} />
            </div>
            <div>
              <span>Letras mas personales</span>
              <strong>55%</strong>
              <i style={{ width: '55%' }} />
            </div>
            <div>
              <span>Sonido totalmente distinto</span>
              <strong>72%</strong>
              <i style={{ width: '72%' }} />
            </div>
          </div>
        </section>

        <hr className="community-divider" />

        <section className="community-strip" aria-labelledby="community-title">
          <h2 id="community-title">Comunidad Vogue</h2>
          <p>Interactua con nuestra comunidad de lectoras</p>
          <RankingSection title="Los mas visto esta semana" articles={communityContent.mostViewed} icon="eye" />
          <RankingSection title="Lo mas guardado esta semana" articles={communityContent.mostSaved} icon="bookmark" />
          <RankingSection title="Lo mas likeado esta semana" articles={communityContent.mostLiked} icon="heart" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
