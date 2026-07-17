import { useEffect, useState } from 'react';
import { HeaderDesktop } from '../components/layout/HeaderDesktop';
import { Footer } from '../components/layout/Footer';
import { HeroNews } from '../components/content/HeroNews';
import { VogueChoiceSection } from '../components/content/VogueChoiceSection';
import { ReelsSection } from '../components/content/ReelsSection';
import { JoinUsSection } from '../components/content/JoinUsSection';
import { EditorialCarouselSection } from '../components/content/EditorialCarouselSection';
import { EditorialFeatureStrip } from '../components/content/EditorialFeatureStrip';
import { HomeReadingSection } from '../components/content/HomeReadingSection';
import { RegisterExperienceSection } from '../components/content/RegisterExperienceSection';
import {
  homeLoggedInImageStrips,
  homeLoggedOutImageStrips,
  type HomePage,
} from '../data/mockContent';
import { getVogueUserProfile, isVogueUserLoggedIn, subscribeToVogueAuthChange } from '../utils/authState';
import './templates.css';

export function HomeTemplate({ data }: { data: HomePage }) {
  const [loggedIn, setLoggedIn] = useState(isVogueUserLoggedIn);
  const [profile, setProfile] = useState(getVogueUserProfile);

  useEffect(
    () =>
      subscribeToVogueAuthChange(() => {
        setLoggedIn(isVogueUserLoggedIn());
        setProfile(getVogueUserProfile());
      }),
    [],
  );

  const country = profile.country || 'Argentina';

  return (
    <div className={`page-shell home-page-shell${loggedIn ? ' is-logged-in' : ' is-logged-out'}`}>
      <HeaderDesktop />
      <main className="home-main">
        <HeroNews item={data.hero} items={[data.hero, ...data.actualidad.smallCards]} />
        {loggedIn ? (
          <>
            <HomeReadingSection
              title={`Lo más leído en: ${country}`}
              subtitle={
                <>
                  Encontrá más en <span>Comunidad Vogue</span>
                </>
              }
              imageCards={homeLoggedInImageStrips.mostReadArgentina}
            />
            <HomeReadingSection
              eyebrow="Para vos"
              title="Basado en tus intereses"
              imageCards={homeLoggedInImageStrips.paraVos}
              variant="personalized"
            />
          </>
        ) : (
          <HomeReadingSection title="Lo mas leido esta semana" imageCards={homeLoggedOutImageStrips.mostReadWeek} />
        )}
        <VogueChoiceSection
          eyebrow={data.vogueChoice.eyebrow}
          title={data.vogueChoice.title}
          subtitle={
            loggedIn
              ? 'La comunidad Vogue ya voto. Estos son los looks que mas definieron la alfombra segun nuestras lectoras.'
              : data.vogueChoice.subtitle
          }
          looks={data.vogueChoice.looks}
        />
        <ReelsSection reels={data.reels} />
        <JoinUsSection item={data.joinUs} homeLayout />
        {!loggedIn ? <RegisterExperienceSection /> : null}
        <EditorialCarouselSection title="Moda y Belleza" articles={data.modaBelleza} />
        {loggedIn ? (
          <HomeReadingSection
            title="Lo más leído en: Latinoamerica"
            subtitle={
              <>
                Mirá más como esto en <span>Comunidad Vogue</span>
              </>
            }
            imageCards={homeLoggedInImageStrips.mostReadLatam}
          />
        ) : (
          <HomeReadingSection
            title="Lo mas leido en: Latinoamerica"
            subtitle={
              <>
                Encontrá más de esto <span>registrándote</span>
              </>
            }
            imageCards={homeLoggedOutImageStrips.mostReadLatam}
          />
        )}
        <EditorialFeatureStrip title="No te lo pierdas" articles={data.noTeLoPierdas} />
      </main>
      <Footer />
    </div>
  );
}
