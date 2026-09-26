export type ThemeName = 'blue' | 'petrol' | 'violet';

export interface TopicCardProps {
  /** Doubles as the Icon name: prehled, medicina, zenske-zdravi, dlouhovekost, spanek, fitness, vyziva, lifestyle. */
  slug: string;
  /** The subject's name, always in text beside the mark. */
  name: string;
  /** Two sentences: what the subject covers, and what is contested in it. */
  summary: string;
  /** Topic colour. Petrol and violet are topic colour only — never site chrome. */
  theme?: ThemeName;
  href?: string;
  more?: string;
}

export function TopicCard(props: TopicCardProps): JSX.Element;
