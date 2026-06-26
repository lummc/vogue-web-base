import type { ArticleContent } from '../data/articleContent';
import { ArticleBody } from '../components/article/ArticleBody';
import { ArticleHero } from '../components/article/ArticleHero';
import { ArticleRecommendations } from '../components/article/ArticleRecommendations';
import { LongArticleBody } from '../components/article/LongArticleBody';
import { Footer } from '../components/layout/Footer';
import { HeaderDesktop } from '../components/layout/HeaderDesktop';

export function ArticleTemplate({ article }: { article: ArticleContent }) {
  const isLongform = article.variant === 'longform' && article.longform;

  return (
    <div className="page-shell article-page-shell">
      <HeaderDesktop />
      <main>
        <ArticleHero hero={article.hero} />
        {isLongform ? (
          <LongArticleBody article={article} />
        ) : (
          <>
            <ArticleBody article={article} />
            <ArticleRecommendations recommendations={article.recommendations} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
