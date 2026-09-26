export interface EntryCardProps {
  title: string;
  /** Mono meta line: a date, a show name, a format. */
  meta: string;
  /** Omit for an inert entry: it then renders flat, with no mark and no hover. */
  href?: string;
  external?: boolean;
  cta?: string;
}

export function EntryCard(props: EntryCardProps): JSX.Element;
