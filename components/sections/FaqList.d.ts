export interface FaqItem {
  q: string;
  /** Answerable from a real source. A question with no sourced answer is not invented to fill a row. */
  a: string;
}

export interface FaqListProps {
  items?: FaqItem[];
  openFirst?: boolean;
}

export function FaqList(props: FaqListProps): JSX.Element;
