import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PromoArticleCard } from '../components/cards/PromoArticleCard';
import { SearchInput } from '../components/forms/SearchInput';
import { Footer } from '../components/layout/Footer';
import { HeaderDesktop } from '../components/layout/HeaderDesktop';
import { searchResults } from '../data/searchContent';
import '../styles/components.css';

export function SearchTemplate() {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const resultSummary = submittedQuery
    ? `1.150 Historias sobre “${submittedQuery.toUpperCase()}”`
    : '10,000+ Historias en Vogue Mexico';

  return (
    <div className="page-shell search-page-shell">
      <HeaderDesktop />
      <main className="search-page section-frame">
        <section className="search-page__intro" aria-labelledby="search-page-title">
          <h1 id="search-page-title">Buscar en Vogue México</h1>
          <SearchInput value={query} onChange={setQuery} onSearch={() => setSubmittedQuery(query.trim())} />
          <p>{resultSummary}</p>
        </section>
        <hr className="search-page__rule" />
        <section className="search-page__filter" aria-label="Orden de resultados">
          <span>Filtrado por</span>
          <button type="button">
            Relevancia
            <ChevronDown size={22} strokeWidth={1.5} />
          </button>
        </section>
        <hr className="search-page__rule" />
        <section className="search-results-grid" aria-label="Resultados de búsqueda">
          {searchResults.map((article) => (
            <PromoArticleCard article={article} key={`${article.category}-${article.title}`} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
