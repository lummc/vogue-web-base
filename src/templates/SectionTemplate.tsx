import { Footer } from '../components/layout/Footer';
import { HeaderDesktop } from '../components/layout/HeaderDesktop';
import { FeatureStoryBlock } from '../components/content/FeatureStoryBlock';
import { ArticleCarouselBlock, FeaturedGridBlock } from '../components/content/SectionEditorialBlock';
import { MixedFeatureGrid } from '../components/content/MixedFeatureGrid';
import { NewsListSection } from '../components/content/NewsListSection';
import { SectionDivider } from '../components/content/SectionDivider';
import { SectionHero } from '../components/content/SectionHero';
import { JoinUsSection } from '../components/content/JoinUsSection';
import { SectionVideoCarousel } from '../components/content/SectionVideoCarousel';
import { TrendCarouselSection } from '../components/content/TrendCarouselSection';
import type { SectionBlock, SectionPageData } from '../data/sectionContent';
import './templates.css';

function renderBlock(block: SectionBlock) {
  if (block.type === 'featureStory') {
    return <FeatureStoryBlock title={block.title} story={block.story} secondary={block.secondary} />;
  }

  if (block.type === 'joinUs') {
    return <JoinUsSection item={block.item} />;
  }

  if (block.type === 'videoCarousel') {
    return <SectionVideoCarousel title={block.title} layout={block.layout} items={block.items} />;
  }

  if (block.type === 'featuredGrid') {
    return <FeaturedGridBlock title={block.title} articles={block.articles} featured={block.featured} />;
  }

  if (block.type === 'trendCarousel') {
    return <TrendCarouselSection title={block.title} subtitle={block.subtitle} looks={block.looks} />;
  }

  if (block.type === 'articleCarousel') {
    return <ArticleCarouselBlock title={block.title} articles={block.articles} />;
  }

  if (block.type === 'mixedFeatureGrid') {
    return <MixedFeatureGrid title={block.title} articles={block.articles} featured={block.featured} />;
  }

  return <NewsListSection title={block.title} items={block.items} />;
}

export function SectionTemplate({ data }: { data: SectionPageData }) {
  return (
    <div className="page-shell section-page-shell">
      <HeaderDesktop />
      <main>
        <SectionHero hero={data.hero} />
        {data.blocks.map((block, index) => (
          <div key={`${data.slug}-${block.type}-${block.title}`}>
            {index > 0 ? <SectionDivider /> : null}
            {renderBlock(block)}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
