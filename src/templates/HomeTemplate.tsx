import { HeaderDesktop } from '../components/layout/HeaderDesktop';
import { Footer } from '../components/layout/Footer';
import { HeroNews } from '../components/content/HeroNews';
import { ActualidadSection } from '../components/content/ActualidadSection';
import { VogueChoiceSection } from '../components/content/VogueChoiceSection';
import { ReelsSection } from '../components/content/ReelsSection';
import { JoinUsSection } from '../components/content/JoinUsSection';
import { EditorialCarouselSection } from '../components/content/EditorialCarouselSection';
import { EditorialFeatureStrip } from '../components/content/EditorialFeatureStrip';
import type { HomePage } from '../data/mockContent';
import './templates.css';

export function HomeTemplate({ data }: { data: HomePage }) {
  return (
    <div className="page-shell">
      <HeaderDesktop />
      <main>
        <HeroNews item={data.hero} items={[data.hero, ...data.actualidad.smallCards]} />
        <ActualidadSection smallCards={data.actualidad.smallCards} featured={data.actualidad.featured} />
        <VogueChoiceSection
          eyebrow={data.vogueChoice.eyebrow}
          title={data.vogueChoice.title}
          subtitle={data.vogueChoice.subtitle}
          looks={data.vogueChoice.looks}
        />
        <ReelsSection reels={data.reels} />
        <JoinUsSection item={data.joinUs} />
        <EditorialCarouselSection title="Moda y Belleza" articles={data.modaBelleza} />
        <EditorialFeatureStrip title="No te lo pierdas" articles={data.noTeLoPierdas} />
      </main>
      <Footer />
    </div>
  );
}
