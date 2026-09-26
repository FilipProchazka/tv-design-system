import type { GradeLevel } from '../core/Grade';

export interface PublicationRowProps {
  year: number | string;
  title: string;
  authors?: string;
  journal: string;
  /** Omit for an inert row: no mark, no hover. */
  href?: string;
  /** Only where the paper's design is stated. Never inferred. */
  grade?: GradeLevel;
}

export function PublicationRow(props: PublicationRowProps): JSX.Element;
