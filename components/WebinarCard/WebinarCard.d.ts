export interface WebinarCardProps {
  title: string;
  /** Czech long date and time, or "Kdykoliv, záznam". */
  when: string;
  /** e.g. "90 min". */
  duration: string;
  /** Formatted Czech price, e.g. "890 Kč". Tabular numerals. */
  price: string;
  href?: string;
  cta?: string;
}

export function WebinarCard(props: WebinarCardProps): JSX.Element;
