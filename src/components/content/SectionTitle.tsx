import type { ReactNode } from 'react';
import '../../styles/components.css';

type SectionTitleProps = {
  children: ReactNode;
  id?: string;
};

export function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2 className="section-title" id={id}>
      {children}
    </h2>
  );
}
