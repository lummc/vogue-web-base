import type { ReactNode } from 'react';
import '../../styles/components.css';

export function Carousel({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="carousel" role="region" aria-label={label}>
      {children}
    </div>
  );
}
