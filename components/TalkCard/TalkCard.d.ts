export interface TalkCardProps {
  title: string;
  /** Two sentences. Never cut to fit the grid. */
  abstract: string;
  /** Mono meta line, e.g. "25 min · prezenčně i online · česky". */
  meta: string;
  /** The topic's name in text, accent-coloured mono. */
  topicName?: string;
  /** Duotoned photograph, chosen by subject — never of her. */
  image: string;
  alt?: string;
  href?: string;
  cta?: string;
}

export function TalkCard(props: TalkCardProps): JSX.Element;
