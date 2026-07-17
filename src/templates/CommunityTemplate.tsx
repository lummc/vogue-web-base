import { useEffect, useState } from 'react';
import { Footer } from '../components/layout/Footer';
import { HeaderDesktop } from '../components/layout/HeaderDesktop';
import {
  communityVogueHero,
  communityVogueRegions,
  type CommunityMetricKind,
  type CommunityPngCard,
  type CommunityPngRegion,
} from '../data/communityContent';
import { getVogueUserProfile, isVogueUserLoggedIn } from '../utils/authState';
import { navigateTo } from '../utils/routes';
import '../styles/components.css';

const metricTabs: Array<{ id: CommunityMetricKind; label: string }> = [
  { id: 'saved', label: 'Mas guardados' },
  { id: 'likes', label: 'Mas likes' },
  { id: 'views', label: 'Mas vistos' },
];

function CommunityPngAssetCard({ card }: { card: CommunityPngCard }) {
  return (
    <article className="community-png-card" aria-label={card.imageAlt}>
      <img src={card.imageSrc} alt={card.imageAlt} />
    </article>
  );
}

function CommunityRegionSection({ region, index }: { region: CommunityPngRegion; index: number }) {
  const [activeTab, setActiveTab] = useState<CommunityMetricKind>('saved');
  const cards = region.sets[activeTab];
  const titleId = `community-region-${index}`;

  return (
    <section className="community-region" aria-labelledby={titleId}>
      <h2 id={titleId}>{region.title}</h2>
      {region.subtitle ? <p>{region.subtitle}</p> : null}
      <div className="community-region__tabs" role="tablist" aria-label={region.title}>
        {metricTabs.map((tab) => (
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
      <div className="community-region__grid community-region__grid--png">
        {cards.map((card) => (
          <CommunityPngAssetCard card={card} key={`${region.title}-${activeTab}-${card.imageSrc}`} />
        ))}
      </div>
    </section>
  );
}

export function CommunityTemplate() {
  const loggedIn = isVogueUserLoggedIn();
  const profile = getVogueUserProfile();

  useEffect(() => {
    if (!loggedIn) {
      navigateTo('/', true);
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return null;
  }

  return (
    <div className="page-shell community-page-shell community-page-shell--new">
      <HeaderDesktop />
      <main className="community-page-new">
        <section className="community-hero-new community-hero-new--asset" aria-label={communityVogueHero.imageAlt}>
          <img src={communityVogueHero.imageSrc} alt={communityVogueHero.imageAlt} />
          <div className="community-hero-new__copy">
            <p>{communityVogueHero.category}</p>
            <h1>{communityVogueHero.title}</h1>
            <span>{communityVogueHero.author}</span>
            <small>{communityVogueHero.date}</small>
          </div>
        </section>

        <section className="community-intro section-frame" aria-labelledby="community-intro-title">
          <h2 id="community-intro-title">Comunidad Vogue</h2>
          <p>Interactua con nuestra comunidad de lectoras y encuentra tus articulos favoritos</p>
          <span>Hola, {profile.name || 'Fernanda'}</span>
        </section>

        <div className="community-region-stack section-frame">
          {communityVogueRegions.map((region, index) => (
            <CommunityRegionSection region={region} index={index} key={region.title} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
