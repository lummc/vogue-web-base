import { HeaderDesktop } from '../components/layout/HeaderDesktop';
import { HeaderMobile } from '../components/layout/HeaderMobile';
import { SearchInput } from '../components/forms/SearchInput';

export function SearchTemplate() {
  return (
    <div className="page-shell">
      <HeaderDesktop />
      <HeaderMobile />
      <main className="section-frame">
        <SearchInput />
      </main>
    </div>
  );
}
